package operations



type UpdateProjectPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type UpdateProjectHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateProjectRequestBody struct {
    ClientToken *string `json:"clientToken,omitempty"`
    ProjectDescription *string `json:"projectDescription,omitempty"`
    ProjectName string `json:"projectName"`
    
}

type UpdateProjectRequest struct {
    PathParams UpdateProjectPathParams 
    Headers UpdateProjectHeaders 
    Request UpdateProjectRequestBody `request:"mediaType=application/json"`
    
}

type UpdateProjectResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateProjectResponse map[string]interface{} 
    
}

