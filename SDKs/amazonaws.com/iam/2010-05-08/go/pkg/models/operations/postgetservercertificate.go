package operations

type PostGetServerCertificateActionEnum string

const (
	PostGetServerCertificateActionEnumGetServerCertificate PostGetServerCertificateActionEnum = "GetServerCertificate"
)

type PostGetServerCertificateVersionEnum string

const (
	PostGetServerCertificateVersionEnumTwoThousandAndTen0508 PostGetServerCertificateVersionEnum = "2010-05-08"
)

type PostGetServerCertificateQueryParams struct {
	Action  PostGetServerCertificateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetServerCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetServerCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetServerCertificateRequest struct {
	QueryParams PostGetServerCertificateQueryParams
	Headers     PostGetServerCertificateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetServerCertificateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
