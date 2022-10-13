package operations

type GetUpdateSigningCertificateActionEnum string

const (
	GetUpdateSigningCertificateActionEnumUpdateSigningCertificate GetUpdateSigningCertificateActionEnum = "UpdateSigningCertificate"
)

type GetUpdateSigningCertificateStatusEnum string

const (
	GetUpdateSigningCertificateStatusEnumActive   GetUpdateSigningCertificateStatusEnum = "Active"
	GetUpdateSigningCertificateStatusEnumInactive GetUpdateSigningCertificateStatusEnum = "Inactive"
)

type GetUpdateSigningCertificateVersionEnum string

const (
	GetUpdateSigningCertificateVersionEnumTwoThousandAndTen0508 GetUpdateSigningCertificateVersionEnum = "2010-05-08"
)

type GetUpdateSigningCertificateQueryParams struct {
	Action        GetUpdateSigningCertificateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CertificateID string                                 `queryParam:"style=form,explode=true,name=CertificateId"`
	Status        GetUpdateSigningCertificateStatusEnum  `queryParam:"style=form,explode=true,name=Status"`
	UserName      *string                                `queryParam:"style=form,explode=true,name=UserName"`
	Version       GetUpdateSigningCertificateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUpdateSigningCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUpdateSigningCertificateRequest struct {
	QueryParams GetUpdateSigningCertificateQueryParams
	Headers     GetUpdateSigningCertificateHeaders
}

type GetUpdateSigningCertificateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
