package operations

import (
"openapi/pkg/models/shared")

type ListIntegrationsPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=DomainName"`
    
}

type ListIntegrationsQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=max-results"`
    NextToken *string `queryParam:"style=form,explode=true,name=next-token"`
    
}

type ListIntegrationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListIntegrationsRequest struct {
    PathParams ListIntegrationsPathParams 
    QueryParams ListIntegrationsQueryParams 
    Headers ListIntegrationsHeaders 
    
}

type ListIntegrationsResponse struct {
    AccessDeniedException *interface{} 
    BadRequestException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListIntegrationsResponse *shared.ListIntegrationsResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

