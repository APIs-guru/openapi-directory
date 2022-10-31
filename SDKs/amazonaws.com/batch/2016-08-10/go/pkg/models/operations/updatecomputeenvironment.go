package operations

import (
"openapi/pkg/models/shared")

type UpdateComputeEnvironmentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateComputeEnvironmentRequestBodyComputeResources struct {
    DesiredvCpus *int64 `json:"desiredvCpus,omitempty"`
    MaxvCpus *int64 `json:"maxvCpus,omitempty"`
    MinvCpus *int64 `json:"minvCpus,omitempty"`
    SecurityGroupIds []string `json:"securityGroupIds,omitempty"`
    Subnets []string `json:"subnets,omitempty"`
    
}


type UpdateComputeEnvironmentRequestBodyStateEnum string

const (
    UpdateComputeEnvironmentRequestBodyStateEnumEnabled UpdateComputeEnvironmentRequestBodyStateEnum = "ENABLED"
UpdateComputeEnvironmentRequestBodyStateEnumDisabled UpdateComputeEnvironmentRequestBodyStateEnum = "DISABLED"
)


type UpdateComputeEnvironmentRequestBody struct {
    ComputeEnvironment string `json:"computeEnvironment"`
    ComputeResources *UpdateComputeEnvironmentRequestBodyComputeResources `json:"computeResources,omitempty"`
    ServiceRole *string `json:"serviceRole,omitempty"`
    State *UpdateComputeEnvironmentRequestBodyStateEnum `json:"state,omitempty"`
    
}

type UpdateComputeEnvironmentRequest struct {
    Headers UpdateComputeEnvironmentHeaders 
    Request UpdateComputeEnvironmentRequestBody `request:"mediaType=application/json"`
    
}

type UpdateComputeEnvironmentResponse struct {
    ClientException *interface{} 
    ContentType string 
    ServerException *interface{} 
    StatusCode int64 
    UpdateComputeEnvironmentResponse *shared.UpdateComputeEnvironmentResponse 
    
}

