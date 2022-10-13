package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterJobDefinitionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type RegisterJobDefinitionRequestBodyContainerProperties struct {
	Command                      []string                             `json:"command"`
	Environment                  []shared.KeyValuePair                `json:"environment"`
	ExecutionRoleArn             *string                              `json:"executionRoleArn"`
	FargatePlatformConfiguration *shared.FargatePlatformConfiguration `json:"fargatePlatformConfiguration"`
	Image                        *string                              `json:"image"`
	InstanceType                 *string                              `json:"instanceType"`
	JobRoleArn                   *string                              `json:"jobRoleArn"`
	LinuxParameters              *shared.LinuxParameters              `json:"linuxParameters"`
	LogConfiguration             *shared.LogConfiguration             `json:"logConfiguration"`
	Memory                       *int64                               `json:"memory"`
	MountPoints                  []shared.MountPoint                  `json:"mountPoints"`
	NetworkConfiguration         *shared.NetworkConfiguration         `json:"networkConfiguration"`
	Privileged                   *bool                                `json:"privileged"`
	ReadonlyRootFilesystem       *bool                                `json:"readonlyRootFilesystem"`
	ResourceRequirements         []shared.ResourceRequirement         `json:"resourceRequirements"`
	Secrets                      []shared.Secret                      `json:"secrets"`
	Ulimits                      []shared.Ulimit                      `json:"ulimits"`
	User                         *string                              `json:"user"`
	Vcpus                        *int64                               `json:"vcpus"`
	Volumes                      []shared.Volume                      `json:"volumes"`
}

type RegisterJobDefinitionRequestBodyNodeProperties struct {
	MainNode            *int64                     `json:"mainNode"`
	NodeRangeProperties []shared.NodeRangeProperty `json:"nodeRangeProperties"`
	NumNodes            *int64                     `json:"numNodes"`
}

type RegisterJobDefinitionRequestBodyRetryStrategy struct {
	Attempts       *int64                  `json:"attempts"`
	EvaluateOnExit []shared.EvaluateOnExit `json:"evaluateOnExit"`
}

type RegisterJobDefinitionRequestBodyTimeout struct {
	AttemptDurationSeconds *int64 `json:"attemptDurationSeconds"`
}

type RegisterJobDefinitionRequestBodyTypeEnum string

const (
	RegisterJobDefinitionRequestBodyTypeEnumContainer RegisterJobDefinitionRequestBodyTypeEnum = "container"
	RegisterJobDefinitionRequestBodyTypeEnumMultinode RegisterJobDefinitionRequestBodyTypeEnum = "multinode"
)

type RegisterJobDefinitionRequestBody struct {
	ContainerProperties  *RegisterJobDefinitionRequestBodyContainerProperties `json:"containerProperties"`
	JobDefinitionName    string                                               `json:"jobDefinitionName"`
	NodeProperties       *RegisterJobDefinitionRequestBodyNodeProperties      `json:"nodeProperties"`
	Parameters           map[string]string                                    `json:"parameters"`
	PlatformCapabilities []shared.PlatformCapabilityEnum                      `json:"platformCapabilities"`
	PropagateTags        *bool                                                `json:"propagateTags"`
	RetryStrategy        *RegisterJobDefinitionRequestBodyRetryStrategy       `json:"retryStrategy"`
	Tags                 map[string]string                                    `json:"tags"`
	Timeout              *RegisterJobDefinitionRequestBodyTimeout             `json:"timeout"`
	Type                 RegisterJobDefinitionRequestBodyTypeEnum             `json:"type"`
}

type RegisterJobDefinitionRequest struct {
	Headers RegisterJobDefinitionHeaders
	Request RegisterJobDefinitionRequestBody `request:"mediaType=application/json"`
}

type RegisterJobDefinitionResponse struct {
	ClientException               *interface{}
	ContentType                   string
	RegisterJobDefinitionResponse *shared.RegisterJobDefinitionResponse
	ServerException               *interface{}
	StatusCode                    int64
}
