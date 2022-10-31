package operations

import (
"openapi/pkg/models/shared")

type DescribeWorkspacePathParams struct {
    WorkspaceID string `pathParam:"style=simple,explode=false,name=workspaceId"`
    
}

type DescribeWorkspaceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeWorkspaceRequest struct {
    PathParams DescribeWorkspacePathParams 
    Headers DescribeWorkspaceHeaders 
    
}

type DescribeWorkspaceResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeWorkspaceResponse *shared.DescribeWorkspaceResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

