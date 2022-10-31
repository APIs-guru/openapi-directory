package operations

import (
"openapi/pkg/models/shared")


type PutConfigRuleXAmzTargetEnum string

const (
    PutConfigRuleXAmzTargetEnumStarlingDoveServicePutConfigRule PutConfigRuleXAmzTargetEnum = "StarlingDoveService.PutConfigRule"
)


type PutConfigRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutConfigRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutConfigRuleRequest struct {
    Headers PutConfigRuleHeaders 
    Request shared.PutConfigRuleRequest `request:"mediaType=application/json"`
    
}

type PutConfigRuleResponse struct {
    ContentType string 
    InsufficientPermissionsException *interface{} 
    InvalidParameterValueException *interface{} 
    MaxNumberOfConfigRulesExceededException *interface{} 
    NoAvailableConfigurationRecorderException *interface{} 
    ResourceInUseException *interface{} 
    StatusCode int64 
    
}

