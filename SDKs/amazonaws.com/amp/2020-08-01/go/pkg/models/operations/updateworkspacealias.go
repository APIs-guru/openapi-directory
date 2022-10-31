package operations



type UpdateWorkspaceAliasPathParams struct {
    WorkspaceID string `pathParam:"style=simple,explode=false,name=workspaceId"`
    
}

type UpdateWorkspaceAliasHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateWorkspaceAliasRequestBody struct {
    Alias *string `json:"alias,omitempty"`
    ClientToken *string `json:"clientToken,omitempty"`
    
}

type UpdateWorkspaceAliasRequest struct {
    PathParams UpdateWorkspaceAliasPathParams 
    Headers UpdateWorkspaceAliasHeaders 
    Request UpdateWorkspaceAliasRequestBody `request:"mediaType=application/json"`
    
}

type UpdateWorkspaceAliasResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

