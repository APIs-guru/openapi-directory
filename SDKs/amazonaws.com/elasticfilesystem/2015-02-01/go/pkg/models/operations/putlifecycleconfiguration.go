package operations

import (
"openapi/pkg/models/shared")

type PutLifecycleConfigurationPathParams struct {
    FileSystemID string `pathParam:"style=simple,explode=false,name=FileSystemId"`
    
}

type PutLifecycleConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PutLifecycleConfigurationRequestBody struct {
    LifecyclePolicies []shared.LifecyclePolicy `json:"LifecyclePolicies"`
    
}

type PutLifecycleConfigurationRequest struct {
    PathParams PutLifecycleConfigurationPathParams 
    Headers PutLifecycleConfigurationHeaders 
    Request PutLifecycleConfigurationRequestBody `request:"mediaType=application/json"`
    
}

type PutLifecycleConfigurationResponse struct {
    BadRequest *interface{} 
    ContentType string 
    FileSystemNotFound *interface{} 
    IncorrectFileSystemLifeCycleState *interface{} 
    InternalServerError *interface{} 
    LifecycleConfigurationDescription *shared.LifecycleConfigurationDescription 
    StatusCode int64 
    
}

