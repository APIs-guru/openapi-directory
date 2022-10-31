package operations

import (
"openapi/pkg/models/shared")

type CreateComputeEnvironmentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateComputeEnvironmentRequestBodyComputeResources struct {
    AllocationStrategy *shared.CrAllocationStrategyEnum `json:"allocationStrategy,omitempty"`
    BidPercentage *int64 `json:"bidPercentage,omitempty"`
    DesiredvCpus *int64 `json:"desiredvCpus,omitempty"`
    Ec2Configuration []shared.Ec2Configuration `json:"ec2Configuration,omitempty"`
    Ec2KeyPair *string `json:"ec2KeyPair,omitempty"`
    ImageID *string `json:"imageId,omitempty"`
    InstanceRole *string `json:"instanceRole,omitempty"`
    InstanceTypes []string `json:"instanceTypes,omitempty"`
    LaunchTemplate *shared.LaunchTemplateSpecification `json:"launchTemplate,omitempty"`
    MaxvCpus *int64 `json:"maxvCpus,omitempty"`
    MinvCpus *int64 `json:"minvCpus,omitempty"`
    PlacementGroup *string `json:"placementGroup,omitempty"`
    SecurityGroupIds []string `json:"securityGroupIds,omitempty"`
    SpotIamFleetRole *string `json:"spotIamFleetRole,omitempty"`
    Subnets []string `json:"subnets,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Type *shared.CrTypeEnum `json:"type,omitempty"`
    
}


type CreateComputeEnvironmentRequestBodyStateEnum string

const (
    CreateComputeEnvironmentRequestBodyStateEnumEnabled CreateComputeEnvironmentRequestBodyStateEnum = "ENABLED"
CreateComputeEnvironmentRequestBodyStateEnumDisabled CreateComputeEnvironmentRequestBodyStateEnum = "DISABLED"
)



type CreateComputeEnvironmentRequestBodyTypeEnum string

const (
    CreateComputeEnvironmentRequestBodyTypeEnumManaged CreateComputeEnvironmentRequestBodyTypeEnum = "MANAGED"
CreateComputeEnvironmentRequestBodyTypeEnumUnmanaged CreateComputeEnvironmentRequestBodyTypeEnum = "UNMANAGED"
)


type CreateComputeEnvironmentRequestBody struct {
    ComputeEnvironmentName string `json:"computeEnvironmentName"`
    ComputeResources *CreateComputeEnvironmentRequestBodyComputeResources `json:"computeResources,omitempty"`
    ServiceRole *string `json:"serviceRole,omitempty"`
    State *CreateComputeEnvironmentRequestBodyStateEnum `json:"state,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Type CreateComputeEnvironmentRequestBodyTypeEnum `json:"type"`
    
}

type CreateComputeEnvironmentRequest struct {
    Headers CreateComputeEnvironmentHeaders 
    Request CreateComputeEnvironmentRequestBody `request:"mediaType=application/json"`
    
}

type CreateComputeEnvironmentResponse struct {
    ClientException *interface{} 
    ContentType string 
    CreateComputeEnvironmentResponse *shared.CreateComputeEnvironmentResponse 
    ServerException *interface{} 
    StatusCode int64 
    
}

