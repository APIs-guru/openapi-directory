package operations

import (
"openapi/pkg/models/shared")

type DeleteContainerRecipeQueryParams struct {
    ContainerRecipeArn string `queryParam:"style=form,explode=true,name=containerRecipeArn"`
    
}

type DeleteContainerRecipeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteContainerRecipeRequest struct {
    QueryParams DeleteContainerRecipeQueryParams 
    Headers DeleteContainerRecipeHeaders 
    
}

type DeleteContainerRecipeResponse struct {
    CallRateLimitExceededException *interface{} 
    ClientException *interface{} 
    ContentType string 
    DeleteContainerRecipeResponse *shared.DeleteContainerRecipeResponse 
    ForbiddenException *interface{} 
    InvalidRequestException *interface{} 
    ResourceDependencyException *interface{} 
    ServiceException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

