package operations

import (
"openapi/pkg/models/shared")

type GetSecurityConfigurationsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type GetSecurityConfigurationsXAmzTargetEnum string

const (
    GetSecurityConfigurationsXAmzTargetEnumAwsGlueGetSecurityConfigurations GetSecurityConfigurationsXAmzTargetEnum = "AWSGlue.GetSecurityConfigurations"
)


type GetSecurityConfigurationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetSecurityConfigurationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetSecurityConfigurationsRequest struct {
    QueryParams GetSecurityConfigurationsQueryParams 
    Headers GetSecurityConfigurationsHeaders 
    Request shared.GetSecurityConfigurationsRequest `request:"mediaType=application/json"`
    
}

type GetSecurityConfigurationsResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    GetSecurityConfigurationsResponse *shared.GetSecurityConfigurationsResponse 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

