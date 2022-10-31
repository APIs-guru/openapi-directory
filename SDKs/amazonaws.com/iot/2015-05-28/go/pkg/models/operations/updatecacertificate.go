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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateCaCertificateRequestBodyRegistrationConfig struct {
	RoleArn      *string `json:"roleArn,omitempty"`
	TemplateBody *string `json:"templateBody,omitempty"`
}

type UpdateCaCertificateRequestBody struct {
	RegistrationConfig     *UpdateCaCertificateRequestBodyRegistrationConfig `json:"registrationConfig,omitempty"`
	RemoveAutoRegistration *bool                                             `json:"removeAutoRegistration,omitempty"`
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
