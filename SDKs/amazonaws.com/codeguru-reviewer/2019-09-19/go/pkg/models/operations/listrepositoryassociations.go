package operations

import (
"openapi/pkg/models/shared")

type ListRepositoryAssociationsQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=MaxResults"`
    Name []string `queryParam:"style=form,explode=true,name=Name"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Owner []string `queryParam:"style=form,explode=true,name=Owner"`
    ProviderType []shared.ProviderTypeEnum `queryParam:"style=form,explode=true,name=ProviderType"`
    State []shared.RepositoryAssociationStateEnum `queryParam:"style=form,explode=true,name=State"`
    
}

type ListRepositoryAssociationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListRepositoryAssociationsRequest struct {
    QueryParams ListRepositoryAssociationsQueryParams 
    Headers ListRepositoryAssociationsHeaders 
    
}

type ListRepositoryAssociationsResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    ListRepositoryAssociationsResponse *shared.ListRepositoryAssociationsResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

