package operations

type GetUpdateServerCertificateActionEnum string

const (
	GetUpdateServerCertificateActionEnumUpdateServerCertificate GetUpdateServerCertificateActionEnum = "UpdateServerCertificate"
)

type GetUpdateServerCertificateVersionEnum string

const (
	GetUpdateServerCertificateVersionEnumTwoThousandAndTen0508 GetUpdateServerCertificateVersionEnum = "2010-05-08"
)

type GetUpdateServerCertificateQueryParams struct {
	Action                   GetUpdateServerCertificateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	NewPath                  *string                               `queryParam:"style=form,explode=true,name=NewPath"`
	NewServerCertificateName *string                               `queryParam:"style=form,explode=true,name=NewServerCertificateName"`
	ServerCertificateName    string                                `queryParam:"style=form,explode=true,name=ServerCertificateName"`
	Version                  GetUpdateServerCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateServerCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUpdateServerCertificateRequest struct {
	QueryParams GetUpdateServerCertificateQueryParams
	Headers     GetUpdateServerCertificateHeaders
}

type GetUpdateServerCertificateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
