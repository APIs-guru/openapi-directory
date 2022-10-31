package operations

import (
"openapi/pkg/models/shared")

type GetResourceConfigHistoryQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type GetResourceConfigHistoryXAmzTargetEnum string

const (
    GetResourceConfigHistoryXAmzTargetEnumStarlingDoveServiceGetResourceConfigHistory GetResourceConfigHistoryXAmzTargetEnum = "StarlingDoveService.GetResourceConfigHistory"
)


type GetResourceConfigHistoryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetResourceConfigHistoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetResourceConfigHistoryRequest struct {
    QueryParams GetResourceConfigHistoryQueryParams 
    Headers GetResourceConfigHistoryHeaders 
    Request shared.GetResourceConfigHistoryRequest `request:"mediaType=application/json"`
    
}

type GetResourceConfigHistoryResponse struct {
    ContentType string 
    GetResourceConfigHistoryResponse *shared.GetResourceConfigHistoryResponse 
    InvalidLimitException *interface{} 
    InvalidNextTokenException *interface{} 
    InvalidTimeRangeException *interface{} 
    NoAvailableConfigurationRecorderException *interface{} 
    ResourceNotDiscoveredException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

