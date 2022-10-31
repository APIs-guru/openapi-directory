package operations

import (
"openapi/pkg/models/shared")

type ListCoreDefinitionVersionsPathParams struct {
    CoreDefinitionID string `pathParam:"style=simple,explode=false,name=CoreDefinitionId"`
    
}

type ListCoreDefinitionVersionsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}

type ListCoreDefinitionVersionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListCoreDefinitionVersionsRequest struct {
    PathParams ListCoreDefinitionVersionsPathParams 
    QueryParams ListCoreDefinitionVersionsQueryParams 
    Headers ListCoreDefinitionVersionsHeaders 
    
}

type ListCoreDefinitionVersionsResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    ListCoreDefinitionVersionsResponse *shared.ListCoreDefinitionVersionsResponse 
    StatusCode int64 
    
}

