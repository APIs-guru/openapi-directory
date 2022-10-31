package operations

type PostUpdateSigningCertificateActionEnum string

const (
	PostUpdateSigningCertificateActionEnumUpdateSigningCertificate PostUpdateSigningCertificateActionEnum = "UpdateSigningCertificate"
)

type PostUpdateSigningCertificateVersionEnum string

const (
	PostUpdateSigningCertificateVersionEnumTwoThousandAndTen0508 PostUpdateSigningCertificateVersionEnum = "2010-05-08"
)

type PostUpdateSigningCertificateQueryParams struct {
	Action  PostUpdateSigningCertificateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUpdateSigningCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUpdateSigningCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostUpdateSigningCertificateRequest struct {
	QueryParams PostUpdateSigningCertificateQueryParams
	Headers     PostUpdateSigningCertificateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUpdateSigningCertificateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
