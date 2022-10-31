package operations

import (
"openapi/pkg/models/shared")

type ListPolicyGenerationsQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    PrincipalArn *string `queryParam:"style=form,explode=true,name=principalArn"`
    
}

type ListPolicyGenerationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListPolicyGenerationsRequest struct {
    QueryParams ListPolicyGenerationsQueryParams 
    Headers ListPolicyGenerationsHeaders 
    
}

type ListPolicyGenerationsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListPolicyGenerationsResponse *shared.ListPolicyGenerationsResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

