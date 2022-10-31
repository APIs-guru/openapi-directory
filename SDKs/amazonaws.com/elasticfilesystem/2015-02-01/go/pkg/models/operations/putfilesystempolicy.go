package operations

import (
"openapi/pkg/models/shared")

type PutFileSystemPolicyPathParams struct {
    FileSystemID string `pathParam:"style=simple,explode=false,name=FileSystemId"`
    
}

type PutFileSystemPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PutFileSystemPolicyRequestBody struct {
    BypassPolicyLockoutSafetyCheck *bool `json:"BypassPolicyLockoutSafetyCheck,omitempty"`
    Policy string `json:"Policy"`
    
}

type PutFileSystemPolicyRequest struct {
    PathParams PutFileSystemPolicyPathParams 
    Headers PutFileSystemPolicyHeaders 
    Request PutFileSystemPolicyRequestBody `request:"mediaType=application/json"`
    
}

type PutFileSystemPolicyResponse struct {
    ContentType string 
    FileSystemNotFound *interface{} 
    FileSystemPolicyDescription *shared.FileSystemPolicyDescription 
    IncorrectFileSystemLifeCycleState *interface{} 
    InternalServerError *interface{} 
    InvalidPolicyException *interface{} 
    StatusCode int64 
    
}

