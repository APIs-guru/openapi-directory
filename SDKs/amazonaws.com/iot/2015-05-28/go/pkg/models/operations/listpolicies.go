package operations

import (
"openapi/pkg/models/shared")

type ListPoliciesQueryParams struct {
    IsAscendingOrder *bool `queryParam:"style=form,explode=true,name=isAscendingOrder"`
    Marker *string `queryParam:"style=form,explode=true,name=marker"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    
}

type ListPoliciesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListPoliciesRequest struct {
    QueryParams ListPoliciesQueryParams 
    Headers ListPoliciesHeaders 
    
}

type ListPoliciesResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ListPoliciesResponse *shared.ListPoliciesResponse 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    
}

