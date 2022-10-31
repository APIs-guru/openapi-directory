package operations

import (
"openapi/pkg/models/shared")

type UpdateEventConfigurationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateEventConfigurationsRequestBody struct {
    EventConfigurations map[string]shared.Configuration `json:"eventConfigurations,omitempty"`
    
}

type UpdateEventConfigurationsRequest struct {
    Headers UpdateEventConfigurationsHeaders 
    Request UpdateEventConfigurationsRequestBody `request:"mediaType=application/json"`
    
}

type UpdateEventConfigurationsResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateEventConfigurationsResponse map[string]interface{} 
    
}

