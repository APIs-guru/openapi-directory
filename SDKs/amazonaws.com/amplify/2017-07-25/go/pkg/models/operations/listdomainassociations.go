package operations

import (
"openapi/pkg/models/shared")

type ListDomainAssociationsPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    
}

type ListDomainAssociationsQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListDomainAssociationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListDomainAssociationsRequest struct {
    PathParams ListDomainAssociationsPathParams 
    QueryParams ListDomainAssociationsQueryParams 
    Headers ListDomainAssociationsHeaders 
    
}

type ListDomainAssociationsResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    ListDomainAssociationsResult *shared.ListDomainAssociationsResult 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

