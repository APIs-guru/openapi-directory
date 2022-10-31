package operations

import (
"openapi/pkg/models/shared")

type ListTargetsForSecurityProfilePathParams struct {
    SecurityProfileName string `pathParam:"style=simple,explode=false,name=securityProfileName"`
    
}

type ListTargetsForSecurityProfileQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListTargetsForSecurityProfileHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListTargetsForSecurityProfileRequest struct {
    PathParams ListTargetsForSecurityProfilePathParams 
    QueryParams ListTargetsForSecurityProfileQueryParams 
    Headers ListTargetsForSecurityProfileHeaders 
    
}

type ListTargetsForSecurityProfileResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ListTargetsForSecurityProfileResponse *shared.ListTargetsForSecurityProfileResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

