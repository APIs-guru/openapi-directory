package operations

import (
"openapi/pkg/models/shared")

type GetTagsPathParams struct {
    ResourceArn string `pathParam:"style=simple,explode=false,name=resource-arn"`
    
}

type GetTagsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetTagsRequest struct {
    PathParams GetTagsPathParams 
    Headers GetTagsHeaders 
    
}

type GetTagsResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    GetTagsResponse *shared.GetTagsResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

