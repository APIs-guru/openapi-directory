package operations

import (
"openapi/pkg/models/shared")


type BatchGetOnPremisesInstancesXAmzTargetEnum string

const (
    BatchGetOnPremisesInstancesXAmzTargetEnumCodeDeploy20141006BatchGetOnPremisesInstances BatchGetOnPremisesInstancesXAmzTargetEnum = "CodeDeploy_20141006.BatchGetOnPremisesInstances"
)


type BatchGetOnPremisesInstancesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget BatchGetOnPremisesInstancesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type BatchGetOnPremisesInstancesRequest struct {
    Headers BatchGetOnPremisesInstancesHeaders 
    Request shared.BatchGetOnPremisesInstancesInput `request:"mediaType=application/json"`
    
}

type BatchGetOnPremisesInstancesResponse struct {
    BatchGetOnPremisesInstancesOutput *shared.BatchGetOnPremisesInstancesOutput 
    BatchLimitExceededException *interface{} 
    ContentType string 
    InstanceNameRequiredException *interface{} 
    InvalidInstanceNameException *interface{} 
    StatusCode int64 
    
}

