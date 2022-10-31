package operations

import (
"openapi/pkg/models/shared")


type DeleteConfigRuleXAmzTargetEnum string

const (
    DeleteConfigRuleXAmzTargetEnumStarlingDoveServiceDeleteConfigRule DeleteConfigRuleXAmzTargetEnum = "StarlingDoveService.DeleteConfigRule"
)


type DeleteConfigRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteConfigRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteConfigRuleRequest struct {
    Headers DeleteConfigRuleHeaders 
    Request shared.DeleteConfigRuleRequest `request:"mediaType=application/json"`
    
}

type DeleteConfigRuleResponse struct {
    ContentType string 
    NoSuchConfigRuleException *interface{} 
    ResourceInUseException *interface{} 
    StatusCode int64 
    
}

