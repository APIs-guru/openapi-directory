package operations

type UpdateProvisioningTemplatePathParams struct {
	TemplateName string `pathParam:"style=simple,explode=false,name=templateName"`
}

type UpdateProvisioningTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateProvisioningTemplateRequestBodyPreProvisioningHook struct {
	PayloadVersion *string `json:"payloadVersion"`
	TargetArn      *string `json:"targetArn"`
}

type UpdateProvisioningTemplateRequestBody struct {
	DefaultVersionID          *int64                                                    `json:"defaultVersionId"`
	Description               *string                                                   `json:"description"`
	Enabled                   *bool                                                     `json:"enabled"`
	PreProvisioningHook       *UpdateProvisioningTemplateRequestBodyPreProvisioningHook `json:"preProvisioningHook"`
	ProvisioningRoleArn       *string                                                   `json:"provisioningRoleArn"`
	RemovePreProvisioningHook *bool                                                     `json:"removePreProvisioningHook"`
}

type UpdateProvisioningTemplateRequest struct {
	PathParams UpdateProvisioningTemplatePathParams
	Headers    UpdateProvisioningTemplateHeaders
	Request    UpdateProvisioningTemplateRequestBody `request:"mediaType=application/json"`
}

type UpdateProvisioningTemplateResponse struct {
	ConflictingResourceUpdateException *interface{}
	ContentType                        string
	InternalFailureException           *interface{}
	InvalidRequestException            *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	UnauthorizedException              *interface{}
	UpdateProvisioningTemplateResponse map[string]interface{}
}
