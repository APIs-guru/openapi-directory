package operations

type PostUntagServerCertificateActionEnum string

const (
	PostUntagServerCertificateActionEnumUntagServerCertificate PostUntagServerCertificateActionEnum = "UntagServerCertificate"
)

type PostUntagServerCertificateVersionEnum string

const (
	PostUntagServerCertificateVersionEnumTwoThousandAndTen0508 PostUntagServerCertificateVersionEnum = "2010-05-08"
)

type PostUntagServerCertificateQueryParams struct {
	Action  PostUntagServerCertificateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUntagServerCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUntagServerCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostUntagServerCertificateRequest struct {
	QueryParams PostUntagServerCertificateQueryParams
	Headers     PostUntagServerCertificateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUntagServerCertificateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
