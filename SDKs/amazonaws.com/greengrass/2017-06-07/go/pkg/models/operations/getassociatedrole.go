package operations

import (
"openapi/pkg/models/shared")

type GetAssociatedRolePathParams struct {
    GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
    
}

type GetAssociatedRoleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetAssociatedRoleRequest struct {
    PathParams GetAssociatedRolePathParams 
    Headers GetAssociatedRoleHeaders 
    
}

type GetAssociatedRoleResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetAssociatedRoleResponse *shared.GetAssociatedRoleResponse 
    InternalServerErrorException *interface{} 
    StatusCode int64 
    
}

