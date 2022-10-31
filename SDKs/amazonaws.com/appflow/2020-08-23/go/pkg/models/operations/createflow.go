package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFlowHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateFlowRequestBodySourceFlowConfig struct {
	ConnectorProfileName      *string                           `json:"connectorProfileName,omitempty"`
	ConnectorType             *shared.ConnectorTypeEnum         `json:"connectorType,omitempty"`
	IncrementalPullConfig     *shared.IncrementalPullConfig     `json:"incrementalPullConfig,omitempty"`
	SourceConnectorProperties *shared.SourceConnectorProperties `json:"sourceConnectorProperties,omitempty"`
}

type CreateFlowRequestBodyTriggerConfig struct {
	TriggerProperties *shared.TriggerProperties `json:"triggerProperties,omitempty"`
	TriggerType       *shared.TriggerTypeEnum   `json:"triggerType,omitempty"`
}

type CreateFlowRequestBody struct {
	Description               *string                               `json:"description,omitempty"`
	DestinationFlowConfigList []shared.DestinationFlowConfig        `json:"destinationFlowConfigList"`
	FlowName                  string                                `json:"flowName"`
	KmsArn                    *string                               `json:"kmsArn,omitempty"`
	SourceFlowConfig          CreateFlowRequestBodySourceFlowConfig `json:"sourceFlowConfig"`
	Tags                      map[string]string                     `json:"tags,omitempty"`
	Tasks                     []shared.Task                         `json:"tasks"`
	TriggerConfig             CreateFlowRequestBodyTriggerConfig    `json:"triggerConfig"`
}

type CreateFlowRequest struct {
	Headers CreateFlowHeaders
	Request CreateFlowRequestBody `request:"mediaType=application/json"`
}

type CreateFlowResponse struct {
	ConflictException                *interface{}
	ConnectorAuthenticationException *interface{}
	ConnectorServerException         *interface{}
	ContentType                      string
	CreateFlowResponse               *shared.CreateFlowResponse
	InternalServerException          *interface{}
	ResourceNotFoundException        *interface{}
	ServiceQuotaExceededException    *interface{}
	StatusCode                       int64
	ValidationException              *interface{}
}
