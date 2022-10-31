package operations

import (
"openapi/pkg/models/shared")

type DescribeThingGroupPathParams struct {
    ThingGroupName string `pathParam:"style=simple,explode=false,name=thingGroupName"`
    
}

type DescribeThingGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeThingGroupRequest struct {
    PathParams DescribeThingGroupPathParams 
    Headers DescribeThingGroupHeaders 
    
}

type DescribeThingGroupResponse struct {
    ContentType string 
    DescribeThingGroupResponse *shared.DescribeThingGroupResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

