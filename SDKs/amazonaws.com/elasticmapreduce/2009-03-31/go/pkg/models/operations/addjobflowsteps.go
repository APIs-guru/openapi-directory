package operations

import (
"openapi/pkg/models/shared")


type AddJobFlowStepsXAmzTargetEnum string

const (
    AddJobFlowStepsXAmzTargetEnumElasticMapReduceAddJobFlowSteps AddJobFlowStepsXAmzTargetEnum = "ElasticMapReduce.AddJobFlowSteps"
)


type AddJobFlowStepsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AddJobFlowStepsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AddJobFlowStepsRequest struct {
    Headers AddJobFlowStepsHeaders 
    Request shared.AddJobFlowStepsInput `request:"mediaType=application/json"`
    
}

type AddJobFlowStepsResponse struct {
    AddJobFlowStepsOutput *shared.AddJobFlowStepsOutput 
    ContentType string 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

