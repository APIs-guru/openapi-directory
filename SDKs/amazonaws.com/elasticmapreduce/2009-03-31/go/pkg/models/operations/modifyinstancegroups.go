package operations

import (
"openapi/pkg/models/shared")


type ModifyInstanceGroupsXAmzTargetEnum string

const (
    ModifyInstanceGroupsXAmzTargetEnumElasticMapReduceModifyInstanceGroups ModifyInstanceGroupsXAmzTargetEnum = "ElasticMapReduce.ModifyInstanceGroups"
)


type ModifyInstanceGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ModifyInstanceGroupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ModifyInstanceGroupsRequest struct {
    Headers ModifyInstanceGroupsHeaders 
    Request shared.ModifyInstanceGroupsInput `request:"mediaType=application/json"`
    
}

type ModifyInstanceGroupsResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

