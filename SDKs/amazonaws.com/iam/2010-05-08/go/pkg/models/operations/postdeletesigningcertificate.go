package operations

type PostDeleteSigningCertificateActionEnum string

const (
	PostDeleteSigningCertificateActionEnumDeleteSigningCertificate PostDeleteSigningCertificateActionEnum = "DeleteSigningCertificate"
)

type PostDeleteSigningCertificateVersionEnum string

const (
	PostDeleteSigningCertificateVersionEnumTwoThousandAndTen0508 PostDeleteSigningCertificateVersionEnum = "2010-05-08"
)

type PostDeleteSigningCertificateQueryParams struct {
	Action  PostDeleteSigningCertificateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteSigningCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteSigningCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteSigningCertificateRequest struct {
	QueryParams PostDeleteSigningCertificateQueryParams
	Headers     PostDeleteSigningCertificateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteSigningCertificateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
