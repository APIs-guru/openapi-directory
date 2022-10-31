package operations



type UpdateDashboardPathParams struct {
    DashboardID string `pathParam:"style=simple,explode=false,name=dashboardId"`
    
}

type UpdateDashboardHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateDashboardRequestBody struct {
    ClientToken *string `json:"clientToken,omitempty"`
    DashboardDefinition string `json:"dashboardDefinition"`
    DashboardDescription *string `json:"dashboardDescription,omitempty"`
    DashboardName string `json:"dashboardName"`
    
}

type UpdateDashboardRequest struct {
    PathParams UpdateDashboardPathParams 
    Headers UpdateDashboardHeaders 
    Request UpdateDashboardRequestBody `request:"mediaType=application/json"`
    
}

type UpdateDashboardResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateDashboardResponse map[string]interface{} 
    
}

