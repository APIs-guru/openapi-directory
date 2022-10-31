package operations

import (
"openapi/pkg/models/shared")


type DeleteOrganizationConfigRuleXAmzTargetEnum string

const (
    DeleteOrganizationConfigRuleXAmzTargetEnumStarlingDoveServiceDeleteOrganizationConfigRule DeleteOrganizationConfigRuleXAmzTargetEnum = "StarlingDoveService.DeleteOrganizationConfigRule"
)


type DeleteOrganizationConfigRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteOrganizationConfigRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteOrganizationConfigRuleRequest struct {
    Headers DeleteOrganizationConfigRuleHeaders 
    Request shared.DeleteOrganizationConfigRuleRequest `request:"mediaType=application/json"`
    
}

type DeleteOrganizationConfigRuleResponse struct {
    ContentType string 
    NoSuchOrganizationConfigRuleException *interface{} 
    OrganizationAccessDeniedException *interface{} 
    ResourceInUseException *interface{} 
    StatusCode int64 
    
}

