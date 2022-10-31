package operations

import (
"openapi/pkg/models/shared")

type GetGroupVersionPathParams struct {
    GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
    GroupVersionID string `pathParam:"style=simple,explode=false,name=GroupVersionId"`
    
}

type GetGroupVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGroupVersionRequest struct {
    PathParams GetGroupVersionPathParams 
    Headers GetGroupVersionHeaders 
    
}

type GetGroupVersionResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetGroupVersionResponse *shared.GetGroupVersionResponse 
    StatusCode int64 
    
}

