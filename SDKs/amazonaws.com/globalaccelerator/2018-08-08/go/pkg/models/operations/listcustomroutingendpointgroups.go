package operations

import (
"openapi/pkg/models/shared")

type ListCustomRoutingEndpointGroupsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListCustomRoutingEndpointGroupsXAmzTargetEnum string

const (
    ListCustomRoutingEndpointGroupsXAmzTargetEnumGlobalAcceleratorV20180706ListCustomRoutingEndpointGroups ListCustomRoutingEndpointGroupsXAmzTargetEnum = "GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups"
)


type ListCustomRoutingEndpointGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListCustomRoutingEndpointGroupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListCustomRoutingEndpointGroupsRequest struct {
    QueryParams ListCustomRoutingEndpointGroupsQueryParams 
    Headers ListCustomRoutingEndpointGroupsHeaders 
    Request shared.ListCustomRoutingEndpointGroupsRequest `request:"mediaType=application/json"`
    
}

type ListCustomRoutingEndpointGroupsResponse struct {
    ContentType string 
    InternalServiceErrorException *interface{} 
    InvalidArgumentException *interface{} 
    InvalidNextTokenException *interface{} 
    ListCustomRoutingEndpointGroupsResponse *shared.ListCustomRoutingEndpointGroupsResponse 
    ListenerNotFoundException *interface{} 
    StatusCode int64 
    
}

