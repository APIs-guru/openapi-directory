package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDeploymentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateDeploymentRequestBodyDeploymentPolicies struct {
	ComponentUpdatePolicy         *shared.DeploymentComponentUpdatePolicy         `json:"componentUpdatePolicy,omitempty"`
	ConfigurationValidationPolicy *shared.DeploymentConfigurationValidationPolicy `json:"configurationValidationPolicy,omitempty"`
	FailureHandlingPolicy         *shared.DeploymentFailureHandlingPolicyEnum     `json:"failureHandlingPolicy,omitempty"`
}

type CreateDeploymentRequestBodyIotJobConfiguration struct {
	AbortConfig                *shared.IoTJobAbortConfig             `json:"abortConfig,omitempty"`
	JobExecutionsRolloutConfig *shared.IoTJobExecutionsRolloutConfig `json:"jobExecutionsRolloutConfig,omitempty"`
	TimeoutConfig              *shared.IoTJobTimeoutConfig           `json:"timeoutConfig,omitempty"`
}

type CreateDeploymentRequestBody struct {
	ClientToken         *string                                            `json:"clientToken,omitempty"`
	Components          map[string]shared.ComponentDeploymentSpecification `json:"components,omitempty"`
	DeploymentName      *string                                            `json:"deploymentName,omitempty"`
	DeploymentPolicies  *CreateDeploymentRequestBodyDeploymentPolicies     `json:"deploymentPolicies,omitempty"`
	IotJobConfiguration *CreateDeploymentRequestBodyIotJobConfiguration    `json:"iotJobConfiguration,omitempty"`
	Tags                map[string]string                                  `json:"tags,omitempty"`
	TargetArn           string                                             `json:"targetArn"`
}

type CreateDeploymentRequest struct {
	Headers CreateDeploymentHeaders
	Request CreateDeploymentRequestBody `request:"mediaType=application/json"`
}

type CreateDeploymentResponse struct {
	AccessDeniedException             *interface{}
	ContentType                       string
	CreateDeploymentResponse          *shared.CreateDeploymentResponse
	InternalServerException           *interface{}
	RequestAlreadyInProgressException *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	ValidationException               *interface{}
}
