package operations



type DeleteAccountAuditConfigurationQueryParams struct {
    DeleteScheduledAudits *bool `queryParam:"style=form,explode=true,name=deleteScheduledAudits"`
    
}

type DeleteAccountAuditConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteAccountAuditConfigurationRequest struct {
    QueryParams DeleteAccountAuditConfigurationQueryParams 
    Headers DeleteAccountAuditConfigurationHeaders 
    
}

type DeleteAccountAuditConfigurationResponse struct {
    ContentType string 
    DeleteAccountAuditConfigurationResponse map[string]interface{} 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

