package operations

type UpdateCaCertificatePathParams struct {
	CaCertificateID string `pathParam:"style=simple,explode=false,name=caCertificateId"`
}

type UpdateCaCertificateNewAutoRegistrationStatusEnum string

const (
	UpdateCaCertificateNewAutoRegistrationStatusEnumEnable  UpdateCaCertificateNewAutoRegistrationStatusEnum = "ENABLE"
	UpdateCaCertificateNewAutoRegistrationStatusEnumDisable UpdateCaCertificateNewAutoRegistrationStatusEnum = "DISABLE"
)

type UpdateCaCertificateNewStatusEnum string

const (
	UpdateCaCertificateNewStatusEnumActive   UpdateCaCertificateNewStatusEnum = "ACTIVE"
	UpdateCaCertificateNewStatusEnumInactive UpdateCaCertificateNewStatusEnum = "INACTIVE"
)

type UpdateCaCertificateQueryParams struct {
	NewAutoRegistrationStatus *UpdateCaCertificateNewAutoRegistrationStatusEnum `queryParam:"style=form,explode=true,name=newAutoRegistrationStatus"`
	NewStatus                 *UpdateCaCertificateNewStatusEnum                 `queryParam:"style=form,explode=true,name=newStatus"`
}

type UpdateCaCertificateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateCaCertificateRequestBodyRegistrationConfig struct {
	RoleArn      *string `json:"roleArn"`
	TemplateBody *string `json:"templateBody"`
}

type UpdateCaCertificateRequestBody struct {
	RegistrationConfig     *UpdateCaCertificateRequestBodyRegistrationConfig `json:"registrationConfig"`
	RemoveAutoRegistration *bool                                             `json:"removeAutoRegistration"`
}

type UpdateCaCertificateRequest struct {
	PathParams  UpdateCaCertificatePathParams
	QueryParams UpdateCaCertificateQueryParams
	Headers     UpdateCaCertificateHeaders
	Request     UpdateCaCertificateRequestBody `request:"mediaType=application/json"`
}

type UpdateCaCertificateResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
