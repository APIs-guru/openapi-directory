package operations

type PostUpdateServerCertificateActionEnum string

const (
	PostUpdateServerCertificateActionEnumUpdateServerCertificate PostUpdateServerCertificateActionEnum = "UpdateServerCertificate"
)

type PostUpdateServerCertificateVersionEnum string

const (
	PostUpdateServerCertificateVersionEnumTwoThousandAndTen0508 PostUpdateServerCertificateVersionEnum = "2010-05-08"
)

type PostUpdateServerCertificateQueryParams struct {
	Action  PostUpdateServerCertificateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateServerCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateServerCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUpdateServerCertificateRequest struct {
	QueryParams PostUpdateServerCertificateQueryParams
	Headers     PostUpdateServerCertificateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateServerCertificateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
