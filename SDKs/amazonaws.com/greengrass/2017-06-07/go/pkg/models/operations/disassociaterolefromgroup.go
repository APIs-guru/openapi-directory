package operations

import (
"openapi/pkg/models/shared")

type DisassociateRoleFromGroupPathParams struct {
    GroupID string `pathParam:"style=simple,explode=false,name=GroupId"`
    
}

type DisassociateRoleFromGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DisassociateRoleFromGroupRequest struct {
    PathParams DisassociateRoleFromGroupPathParams 
    Headers DisassociateRoleFromGroupHeaders 
    
}

type DisassociateRoleFromGroupResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DisassociateRoleFromGroupResponse *shared.DisassociateRoleFromGroupResponse 
    InternalServerErrorException *interface{} 
    StatusCode int64 
    
}

