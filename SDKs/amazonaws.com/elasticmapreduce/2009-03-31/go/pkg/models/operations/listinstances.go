package operations

import (
"openapi/pkg/models/shared")

type ListInstancesQueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    
}


type ListInstancesXAmzTargetEnum string

const (
    ListInstancesXAmzTargetEnumElasticMapReduceListInstances ListInstancesXAmzTargetEnum = "ElasticMapReduce.ListInstances"
)


type ListInstancesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListInstancesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListInstancesRequest struct {
    QueryParams ListInstancesQueryParams 
    Headers ListInstancesHeaders 
    Request shared.ListInstancesInput `request:"mediaType=application/json"`
    
}

type ListInstancesResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    ListInstancesOutput *shared.ListInstancesOutput 
    StatusCode int64 
    
}

