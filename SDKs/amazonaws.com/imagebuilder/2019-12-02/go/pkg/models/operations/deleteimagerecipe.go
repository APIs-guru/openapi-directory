package operations

import (
"openapi/pkg/models/shared")

type DeleteImageRecipeQueryParams struct {
    ImageRecipeArn string `queryParam:"style=form,explode=true,name=imageRecipeArn"`
    
}

type DeleteImageRecipeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteImageRecipeRequest struct {
    QueryParams DeleteImageRecipeQueryParams 
    Headers DeleteImageRecipeHeaders 
    
}

type DeleteImageRecipeResponse struct {
    CallRateLimitExceededException *interface{} 
    ClientException *interface{} 
    ContentType string 
    DeleteImageRecipeResponse *shared.DeleteImageRecipeResponse 
    ForbiddenException *interface{} 
    InvalidRequestException *interface{} 
    ResourceDependencyException *interface{} 
    ServiceException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

