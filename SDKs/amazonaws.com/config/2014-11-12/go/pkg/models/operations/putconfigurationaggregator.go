package operations

import (
"openapi/pkg/models/shared")


type PutConfigurationAggregatorXAmzTargetEnum string

const (
    PutConfigurationAggregatorXAmzTargetEnumStarlingDoveServicePutConfigurationAggregator PutConfigurationAggregatorXAmzTargetEnum = "StarlingDoveService.PutConfigurationAggregator"
)


type PutConfigurationAggregatorHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutConfigurationAggregatorXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutConfigurationAggregatorRequest struct {
    Headers PutConfigurationAggregatorHeaders 
    Request shared.PutConfigurationAggregatorRequest `request:"mediaType=application/json"`
    
}

type PutConfigurationAggregatorResponse struct {
    ContentType string 
    InvalidParameterValueException *interface{} 
    InvalidRoleException *interface{} 
    LimitExceededException *interface{} 
    NoAvailableOrganizationException *interface{} 
    OrganizationAccessDeniedException *interface{} 
    OrganizationAllFeaturesNotEnabledException *interface{} 
    PutConfigurationAggregatorResponse *shared.PutConfigurationAggregatorResponse 
    StatusCode int64 
    
}

