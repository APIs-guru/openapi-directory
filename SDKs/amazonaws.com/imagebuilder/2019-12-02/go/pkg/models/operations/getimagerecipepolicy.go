package operations

import (
"openapi/pkg/models/shared")

type GetImageRecipePolicyQueryParams struct {
    ImageRecipeArn string `queryParam:"style=form,explode=true,name=imageRecipeArn"`
    
}

type GetImageRecipePolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetImageRecipePolicyRequest struct {
    QueryParams GetImageRecipePolicyQueryParams 
    Headers GetImageRecipePolicyHeaders 
    
}

type GetImageRecipePolicyResponse struct {
    CallRateLimitExceededException *interface{} 
    ContentType string 
    ForbiddenException *interface{} 
    GetImageRecipePolicyResponse *shared.GetImageRecipePolicyResponse 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

