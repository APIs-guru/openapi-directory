package operations

import (
"openapi/pkg/models/shared")

type UpdatePipelineNotificationsPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=Id"`
    
}

type UpdatePipelineNotificationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdatePipelineNotificationsRequestBodyNotifications struct {
    Completed *string `json:"Completed,omitempty"`
    Error *string `json:"Error,omitempty"`
    Progressing *string `json:"Progressing,omitempty"`
    Warning *string `json:"Warning,omitempty"`
    
}

type UpdatePipelineNotificationsRequestBody struct {
    Notifications UpdatePipelineNotificationsRequestBodyNotifications `json:"Notifications"`
    
}

type UpdatePipelineNotificationsRequest struct {
    PathParams UpdatePipelineNotificationsPathParams 
    Headers UpdatePipelineNotificationsHeaders 
    Request UpdatePipelineNotificationsRequestBody `request:"mediaType=application/json"`
    
}

type UpdatePipelineNotificationsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    IncompatibleVersionException *interface{} 
    InternalServiceException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdatePipelineNotificationsResponse *shared.UpdatePipelineNotificationsResponse 
    ValidationException *interface{} 
    
}

