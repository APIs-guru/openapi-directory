package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProvisioningTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateProvisioningTemplateRequestBodyPreProvisioningHook struct {
	PayloadVersion *string `json:"payloadVersion"`
	TargetArn      *string `json:"targetArn"`
}

type CreateProvisioningTemplateRequestBody struct {
	Description         *string                                                   `json:"description"`
	Enabled             *bool                                                     `json:"enabled"`
	PreProvisioningHook *CreateProvisioningTemplateRequestBodyPreProvisioningHook `json:"preProvisioningHook"`
	ProvisioningRoleArn string                                                    `json:"provisioningRoleArn"`
	Tags                []shared.Tag                                              `json:"tags"`
	TemplateBody        string                                                    `json:"templateBody"`
	TemplateName        string                                                    `json:"templateName"`
}

type CreateProvisioningTemplateRequest struct {
	Headers CreateProvisioningTemplateHeaders
	Request CreateProvisioningTemplateRequestBody `request:"mediaType=application/json"`
}

type CreateProvisioningTemplateResponse struct {
	ContentType                        string
	CreateProvisioningTemplateResponse *shared.CreateProvisioningTemplateResponse
	InternalFailureException           *interface{}
	InvalidRequestException            *interface{}
	LimitExceededException             *interface{}
	ResourceAlreadyExistsException     *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
	UnauthorizedException              *interface{}
}
