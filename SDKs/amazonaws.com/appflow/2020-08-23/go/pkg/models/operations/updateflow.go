package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFlowHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateFlowRequestBodySourceFlowConfig struct {
	ConnectorProfileName      *string                           `json:"connectorProfileName,omitempty"`
	ConnectorType             *shared.ConnectorTypeEnum         `json:"connectorType,omitempty"`
	IncrementalPullConfig     *shared.IncrementalPullConfig     `json:"incrementalPullConfig,omitempty"`
	SourceConnectorProperties *shared.SourceConnectorProperties `json:"sourceConnectorProperties,omitempty"`
}

type UpdateFlowRequestBodyTriggerConfig struct {
	TriggerProperties *shared.TriggerProperties `json:"triggerProperties,omitempty"`
	TriggerType       *shared.TriggerTypeEnum   `json:"triggerType,omitempty"`
}

type UpdateFlowRequestBody struct {
	Description               *string                               `json:"description,omitempty"`
	DestinationFlowConfigList []shared.DestinationFlowConfig        `json:"destinationFlowConfigList"`
	FlowName                  string                                `json:"flowName"`
	SourceFlowConfig          UpdateFlowRequestBodySourceFlowConfig `json:"sourceFlowConfig"`
	Tasks                     []shared.Task                         `json:"tasks"`
	TriggerConfig             UpdateFlowRequestBodyTriggerConfig    `json:"triggerConfig"`
}

type UpdateFlowRequest struct {
	Headers UpdateFlowHeaders
	Request UpdateFlowRequestBody `request:"mediaType=application/json"`
}

type UpdateFlowResponse struct {
	ConflictException                *interface{}
	ConnectorAuthenticationException *interface{}
	ConnectorServerException         *interface{}
	ContentType                      string
	InternalServerException          *interface{}
	ResourceNotFoundException        *interface{}
	ServiceQuotaExceededException    *interface{}
	StatusCode                       int64
	UpdateFlowResponse               *shared.UpdateFlowResponse
	ValidationException              *interface{}
}
