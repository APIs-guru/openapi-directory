package operations

type PostDeleteServerCertificateActionEnum string

const (
	PostDeleteServerCertificateActionEnumDeleteServerCertificate PostDeleteServerCertificateActionEnum = "DeleteServerCertificate"
)

type PostDeleteServerCertificateVersionEnum string

const (
	PostDeleteServerCertificateVersionEnumTwoThousandAndTen0508 PostDeleteServerCertificateVersionEnum = "2010-05-08"
)

type PostDeleteServerCertificateQueryParams struct {
	Action  PostDeleteServerCertificateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteServerCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteServerCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteServerCertificateRequest struct {
	QueryParams PostDeleteServerCertificateQueryParams
	Headers     PostDeleteServerCertificateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteServerCertificateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
