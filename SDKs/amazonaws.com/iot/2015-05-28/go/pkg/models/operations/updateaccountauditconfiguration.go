package operations

import (
"openapi/pkg/models/shared")

type UpdateAccountAuditConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateAccountAuditConfigurationRequestBody struct {
    AuditCheckConfigurations map[string]shared.AuditCheckConfiguration `json:"auditCheckConfigurations,omitempty"`
    AuditNotificationTargetConfigurations map[string]shared.AuditNotificationTarget `json:"auditNotificationTargetConfigurations,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    
}

type UpdateAccountAuditConfigurationRequest struct {
    Headers UpdateAccountAuditConfigurationHeaders 
    Request UpdateAccountAuditConfigurationRequestBody `request:"mediaType=application/json"`
    
}

type UpdateAccountAuditConfigurationResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateAccountAuditConfigurationResponse map[string]interface{} 
    
}

