package operations

import (
"openapi/pkg/models/shared")

type ListSatellitesQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListSatellitesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListSatellitesRequest struct {
    QueryParams ListSatellitesQueryParams 
    Headers ListSatellitesHeaders 
    
}

type ListSatellitesResponse struct {
    ContentType string 
    DependencyException *interface{} 
    InvalidParameterException *interface{} 
    ListSatellitesResponse *shared.ListSatellitesResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

