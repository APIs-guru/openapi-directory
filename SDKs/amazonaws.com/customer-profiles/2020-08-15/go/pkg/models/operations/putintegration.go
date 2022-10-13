package operations

import (
	"openapi/pkg/models/shared"
)

type PutIntegrationPathParams struct {
	DomainName string `pathParam:"style=simple,explode=false,name=DomainName"`
}

type PutIntegrationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutIntegrationRequestBodyFlowDefinition struct {
	Description      *string                  `json:"Description"`
	FlowName         *string                  `json:"FlowName"`
	KmsArn           *string                  `json:"KmsArn"`
	SourceFlowConfig *shared.SourceFlowConfig `json:"SourceFlowConfig"`
	Tasks            []shared.Task            `json:"Tasks"`
	TriggerConfig    *shared.TriggerConfig    `json:"TriggerConfig"`
}

type PutIntegrationRequestBody struct {
	FlowDefinition *PutIntegrationRequestBodyFlowDefinition `json:"FlowDefinition"`
	ObjectTypeName string                                   `json:"ObjectTypeName"`
	Tags           map[string]string                        `json:"Tags"`
	URI            *string                                  `json:"Uri"`
}

type PutIntegrationRequest struct {
	PathParams PutIntegrationPathParams
	Headers    PutIntegrationHeaders
	Request    PutIntegrationRequestBody `request:"mediaType=application/json"`
}

type PutIntegrationResponse struct {
	AccessDeniedException     *interface{}
	BadRequestException       *interface{}
	ContentType               string
	InternalServerException   *interface{}
	PutIntegrationResponse    *shared.PutIntegrationResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
