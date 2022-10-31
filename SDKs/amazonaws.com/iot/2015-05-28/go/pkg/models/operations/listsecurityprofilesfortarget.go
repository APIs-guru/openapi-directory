package operations

import (
"openapi/pkg/models/shared")

type ListSecurityProfilesForTargetQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    Recursive *bool `queryParam:"style=form,explode=true,name=recursive"`
    SecurityProfileTargetArn string `queryParam:"style=form,explode=true,name=securityProfileTargetArn"`
    
}

type ListSecurityProfilesForTargetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListSecurityProfilesForTargetRequest struct {
    QueryParams ListSecurityProfilesForTargetQueryParams 
    Headers ListSecurityProfilesForTargetHeaders 
    
}

type ListSecurityProfilesForTargetResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ListSecurityProfilesForTargetResponse *shared.ListSecurityProfilesForTargetResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

