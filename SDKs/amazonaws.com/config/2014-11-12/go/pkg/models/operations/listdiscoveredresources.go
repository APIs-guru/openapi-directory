package operations

import (
"openapi/pkg/models/shared")

type ListDiscoveredResourcesQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=limit"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListDiscoveredResourcesXAmzTargetEnum string

const (
    ListDiscoveredResourcesXAmzTargetEnumStarlingDoveServiceListDiscoveredResources ListDiscoveredResourcesXAmzTargetEnum = "StarlingDoveService.ListDiscoveredResources"
)


type ListDiscoveredResourcesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListDiscoveredResourcesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListDiscoveredResourcesRequest struct {
    QueryParams ListDiscoveredResourcesQueryParams 
    Headers ListDiscoveredResourcesHeaders 
    Request shared.ListDiscoveredResourcesRequest `request:"mediaType=application/json"`
    
}

type ListDiscoveredResourcesResponse struct {
    ContentType string 
    InvalidLimitException *interface{} 
    InvalidNextTokenException *interface{} 
    ListDiscoveredResourcesResponse *shared.ListDiscoveredResourcesResponse 
    NoAvailableConfigurationRecorderException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

