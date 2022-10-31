package operations

import (
"openapi/pkg/models/shared")

type ListStepsQueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    
}


type ListStepsXAmzTargetEnum string

const (
    ListStepsXAmzTargetEnumElasticMapReduceListSteps ListStepsXAmzTargetEnum = "ElasticMapReduce.ListSteps"
)


type ListStepsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListStepsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListStepsRequest struct {
    QueryParams ListStepsQueryParams 
    Headers ListStepsHeaders 
    Request shared.ListStepsInput `request:"mediaType=application/json"`
    
}

type ListStepsResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    ListStepsOutput *shared.ListStepsOutput 
    StatusCode int64 
    
}

