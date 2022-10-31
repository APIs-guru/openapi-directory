package operations

import (
"openapi/pkg/models/shared")

type ListAttachedPoliciesPathParams struct {
    Target string `pathParam:"style=simple,explode=false,name=target"`
    
}

type ListAttachedPoliciesQueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=marker"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    Recursive *bool `queryParam:"style=form,explode=true,name=recursive"`
    
}

type ListAttachedPoliciesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListAttachedPoliciesRequest struct {
    PathParams ListAttachedPoliciesPathParams 
    QueryParams ListAttachedPoliciesQueryParams 
    Headers ListAttachedPoliciesHeaders 
    
}

type ListAttachedPoliciesResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ListAttachedPoliciesResponse *shared.ListAttachedPoliciesResponse 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    
}

