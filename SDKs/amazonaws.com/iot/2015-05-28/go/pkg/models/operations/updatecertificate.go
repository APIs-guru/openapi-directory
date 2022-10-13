package operations

type UpdateCertificatePathParams struct {
	CertificateID string `pathParam:"style=simple,explode=false,name=certificateId"`
}

type UpdateCertificateNewStatusEnum string

const (
	UpdateCertificateNewStatusEnumActive            UpdateCertificateNewStatusEnum = "ACTIVE"
	UpdateCertificateNewStatusEnumInactive          UpdateCertificateNewStatusEnum = "INACTIVE"
	UpdateCertificateNewStatusEnumRevoked           UpdateCertificateNewStatusEnum = "REVOKED"
	UpdateCertificateNewStatusEnumPendingTransfer   UpdateCertificateNewStatusEnum = "PENDING_TRANSFER"
	UpdateCertificateNewStatusEnumRegisterInactive  UpdateCertificateNewStatusEnum = "REGISTER_INACTIVE"
	UpdateCertificateNewStatusEnumPendingActivation UpdateCertificateNewStatusEnum = "PENDING_ACTIVATION"
)

type UpdateCertificateQueryParams struct {
	NewStatus UpdateCertificateNewStatusEnum `queryParam:"style=form,explode=true,name=newStatus"`
}

type UpdateCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateCertificateRequest struct {
	PathParams  UpdateCertificatePathParams
	QueryParams UpdateCertificateQueryParams
	Headers     UpdateCertificateHeaders
}

type UpdateCertificateResponse struct {
	CertificateStateException   *interface{}
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
