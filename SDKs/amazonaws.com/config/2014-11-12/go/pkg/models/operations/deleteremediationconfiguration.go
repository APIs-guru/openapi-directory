package operations

import (
"openapi/pkg/models/shared")


type DeleteRemediationConfigurationXAmzTargetEnum string

const (
    DeleteRemediationConfigurationXAmzTargetEnumStarlingDoveServiceDeleteRemediationConfiguration DeleteRemediationConfigurationXAmzTargetEnum = "StarlingDoveService.DeleteRemediationConfiguration"
)


type DeleteRemediationConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteRemediationConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteRemediationConfigurationRequest struct {
    Headers DeleteRemediationConfigurationHeaders 
    Request shared.DeleteRemediationConfigurationRequest `request:"mediaType=application/json"`
    
}

type DeleteRemediationConfigurationResponse struct {
    ContentType string 
    DeleteRemediationConfigurationResponse map[string]interface{} 
    InsufficientPermissionsException *interface{} 
    InvalidParameterValueException *interface{} 
    NoSuchRemediationConfigurationException *interface{} 
    RemediationInProgressException *interface{} 
    StatusCode int64 
    
}

