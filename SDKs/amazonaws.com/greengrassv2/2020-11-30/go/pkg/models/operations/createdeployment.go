package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDeploymentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateDeploymentRequestBodyDeploymentPolicies struct {
	ComponentUpdatePolicy         *shared.DeploymentComponentUpdatePolicy         `json:"componentUpdatePolicy"`
	ConfigurationValidationPolicy *shared.DeploymentConfigurationValidationPolicy `json:"configurationValidationPolicy"`
	FailureHandlingPolicy         *shared.DeploymentFailureHandlingPolicyEnum     `json:"failureHandlingPolicy"`
}

type CreateDeploymentRequestBodyIotJobConfiguration struct {
	AbortConfig                *shared.IoTJobAbortConfig             `json:"abortConfig"`
	JobExecutionsRolloutConfig *shared.IoTJobExecutionsRolloutConfig `json:"jobExecutionsRolloutConfig"`
	TimeoutConfig              *shared.IoTJobTimeoutConfig           `json:"timeoutConfig"`
}

type CreateDeploymentRequestBody struct {
	ClientToken         *string                                            `json:"clientToken"`
	Components          map[string]shared.ComponentDeploymentSpecification `json:"components"`
	DeploymentName      *string                                            `json:"deploymentName"`
	DeploymentPolicies  *CreateDeploymentRequestBodyDeploymentPolicies     `json:"deploymentPolicies"`
	IotJobConfiguration *CreateDeploymentRequestBodyIotJobConfiguration    `json:"iotJobConfiguration"`
	Tags                map[string]string                                  `json:"tags"`
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
