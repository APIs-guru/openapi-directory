package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFlowHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateFlowRequestBodySourceFlowConfig struct {
	ConnectorProfileName      *string                           `json:"connectorProfileName"`
	ConnectorType             *shared.ConnectorTypeEnum         `json:"connectorType"`
	IncrementalPullConfig     *shared.IncrementalPullConfig     `json:"incrementalPullConfig"`
	SourceConnectorProperties *shared.SourceConnectorProperties `json:"sourceConnectorProperties"`
}

type UpdateFlowRequestBodyTriggerConfig struct {
	TriggerProperties *shared.TriggerProperties `json:"triggerProperties"`
	TriggerType       *shared.TriggerTypeEnum   `json:"triggerType"`
}

type UpdateFlowRequestBody struct {
	Description               *string                               `json:"description"`
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
