package operations

import (
"openapi/pkg/models/shared")

type RegisterJobDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type RegisterJobDefinitionRequestBodyContainerProperties struct {
    Command []string `json:"command,omitempty"`
    Environment []shared.KeyValuePair `json:"environment,omitempty"`
    ExecutionRoleArn *string `json:"executionRoleArn,omitempty"`
    FargatePlatformConfiguration *shared.FargatePlatformConfiguration `json:"fargatePlatformConfiguration,omitempty"`
    Image *string `json:"image,omitempty"`
    InstanceType *string `json:"instanceType,omitempty"`
    JobRoleArn *string `json:"jobRoleArn,omitempty"`
    LinuxParameters *shared.LinuxParameters `json:"linuxParameters,omitempty"`
    LogConfiguration *shared.LogConfiguration `json:"logConfiguration,omitempty"`
    Memory *int64 `json:"memory,omitempty"`
    MountPoints []shared.MountPoint `json:"mountPoints,omitempty"`
    NetworkConfiguration *shared.NetworkConfiguration `json:"networkConfiguration,omitempty"`
    Privileged *bool `json:"privileged,omitempty"`
    ReadonlyRootFilesystem *bool `json:"readonlyRootFilesystem,omitempty"`
    ResourceRequirements []shared.ResourceRequirement `json:"resourceRequirements,omitempty"`
    Secrets []shared.Secret `json:"secrets,omitempty"`
    Ulimits []shared.Ulimit `json:"ulimits,omitempty"`
    User *string `json:"user,omitempty"`
    Vcpus *int64 `json:"vcpus,omitempty"`
    Volumes []shared.Volume `json:"volumes,omitempty"`
    
}

type RegisterJobDefinitionRequestBodyNodeProperties struct {
    MainNode *int64 `json:"mainNode,omitempty"`
    NodeRangeProperties []shared.NodeRangeProperty `json:"nodeRangeProperties,omitempty"`
    NumNodes *int64 `json:"numNodes,omitempty"`
    
}

type RegisterJobDefinitionRequestBodyRetryStrategy struct {
    Attempts *int64 `json:"attempts,omitempty"`
    EvaluateOnExit []shared.EvaluateOnExit `json:"evaluateOnExit,omitempty"`
    
}

type RegisterJobDefinitionRequestBodyTimeout struct {
    AttemptDurationSeconds *int64 `json:"attemptDurationSeconds,omitempty"`
    
}


type RegisterJobDefinitionRequestBodyTypeEnum string

const (
    RegisterJobDefinitionRequestBodyTypeEnumContainer RegisterJobDefinitionRequestBodyTypeEnum = "container"
RegisterJobDefinitionRequestBodyTypeEnumMultinode RegisterJobDefinitionRequestBodyTypeEnum = "multinode"
)


type RegisterJobDefinitionRequestBody struct {
    ContainerProperties *RegisterJobDefinitionRequestBodyContainerProperties `json:"containerProperties,omitempty"`
    JobDefinitionName string `json:"jobDefinitionName"`
    NodeProperties *RegisterJobDefinitionRequestBodyNodeProperties `json:"nodeProperties,omitempty"`
    Parameters map[string]string `json:"parameters,omitempty"`
    PlatformCapabilities []shared.PlatformCapabilityEnum `json:"platformCapabilities,omitempty"`
    PropagateTags *bool `json:"propagateTags,omitempty"`
    RetryStrategy *RegisterJobDefinitionRequestBodyRetryStrategy `json:"retryStrategy,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Timeout *RegisterJobDefinitionRequestBodyTimeout `json:"timeout,omitempty"`
    Type RegisterJobDefinitionRequestBodyTypeEnum `json:"type"`
    
}

type RegisterJobDefinitionRequest struct {
    Headers RegisterJobDefinitionHeaders 
    Request RegisterJobDefinitionRequestBody `request:"mediaType=application/json"`
    
}

type RegisterJobDefinitionResponse struct {
    ClientException *interface{} 
    ContentType string 
    RegisterJobDefinitionResponse *shared.RegisterJobDefinitionResponse 
    ServerException *interface{} 
    StatusCode int64 
    
}

