package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFlowHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateFlowRequestBodySourceFlowConfig struct {
	ConnectorProfileName      *string                           `json:"connectorProfileName"`
	ConnectorType             *shared.ConnectorTypeEnum         `json:"connectorType"`
	IncrementalPullConfig     *shared.IncrementalPullConfig     `json:"incrementalPullConfig"`
	SourceConnectorProperties *shared.SourceConnectorProperties `json:"sourceConnectorProperties"`
}

type CreateFlowRequestBodyTriggerConfig struct {
	TriggerProperties *shared.TriggerProperties `json:"triggerProperties"`
	TriggerType       *shared.TriggerTypeEnum   `json:"triggerType"`
}

type CreateFlowRequestBody struct {
	Description               *string                               `json:"description"`
	DestinationFlowConfigList []shared.DestinationFlowConfig        `json:"destinationFlowConfigList"`
	FlowName                  string                                `json:"flowName"`
	KmsArn                    *string                               `json:"kmsArn"`
	SourceFlowConfig          CreateFlowRequestBodySourceFlowConfig `json:"sourceFlowConfig"`
	Tags                      map[string]string                     `json:"tags"`
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
