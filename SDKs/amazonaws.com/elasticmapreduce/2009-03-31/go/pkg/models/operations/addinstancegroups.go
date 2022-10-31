package operations

import (
"openapi/pkg/models/shared")


type AddInstanceGroupsXAmzTargetEnum string

const (
    AddInstanceGroupsXAmzTargetEnumElasticMapReduceAddInstanceGroups AddInstanceGroupsXAmzTargetEnum = "ElasticMapReduce.AddInstanceGroups"
)


type AddInstanceGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AddInstanceGroupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AddInstanceGroupsRequest struct {
    Headers AddInstanceGroupsHeaders 
    Request shared.AddInstanceGroupsInput `request:"mediaType=application/json"`
    
}

type AddInstanceGroupsResponse struct {
    AddInstanceGroupsOutput *shared.AddInstanceGroupsOutput 
    ContentType string 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

