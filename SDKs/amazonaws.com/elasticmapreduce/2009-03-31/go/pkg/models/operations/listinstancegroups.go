package operations

import (
"openapi/pkg/models/shared")

type ListInstanceGroupsQueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    
}


type ListInstanceGroupsXAmzTargetEnum string

const (
    ListInstanceGroupsXAmzTargetEnumElasticMapReduceListInstanceGroups ListInstanceGroupsXAmzTargetEnum = "ElasticMapReduce.ListInstanceGroups"
)


type ListInstanceGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListInstanceGroupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListInstanceGroupsRequest struct {
    QueryParams ListInstanceGroupsQueryParams 
    Headers ListInstanceGroupsHeaders 
    Request shared.ListInstanceGroupsInput `request:"mediaType=application/json"`
    
}

type ListInstanceGroupsResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    ListInstanceGroupsOutput *shared.ListInstanceGroupsOutput 
    StatusCode int64 
    
}

