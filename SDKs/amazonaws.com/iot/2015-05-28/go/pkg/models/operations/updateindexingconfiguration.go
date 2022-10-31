package operations

import (
"openapi/pkg/models/shared")

type UpdateIndexingConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration struct {
    CustomFields []shared.Field `json:"customFields,omitempty"`
    ManagedFields []shared.Field `json:"managedFields,omitempty"`
    ThingGroupIndexingMode *shared.ThingGroupIndexingModeEnum `json:"thingGroupIndexingMode,omitempty"`
    
}

type UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration struct {
    CustomFields []shared.Field `json:"customFields,omitempty"`
    ManagedFields []shared.Field `json:"managedFields,omitempty"`
    ThingConnectivityIndexingMode *shared.ThingConnectivityIndexingModeEnum `json:"thingConnectivityIndexingMode,omitempty"`
    ThingIndexingMode *shared.ThingIndexingModeEnum `json:"thingIndexingMode,omitempty"`
    
}

type UpdateIndexingConfigurationRequestBody struct {
    ThingGroupIndexingConfiguration *UpdateIndexingConfigurationRequestBodyThingGroupIndexingConfiguration `json:"thingGroupIndexingConfiguration,omitempty"`
    ThingIndexingConfiguration *UpdateIndexingConfigurationRequestBodyThingIndexingConfiguration `json:"thingIndexingConfiguration,omitempty"`
    
}

type UpdateIndexingConfigurationRequest struct {
    Headers UpdateIndexingConfigurationHeaders 
    Request UpdateIndexingConfigurationRequestBody `request:"mediaType=application/json"`
    
}

type UpdateIndexingConfigurationResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    UpdateIndexingConfigurationResponse map[string]interface{} 
    
}

