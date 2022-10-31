package operations

import (
"openapi/pkg/models/shared")

type ListSecurityProfilesQueryParams struct {
    DimensionName *string `queryParam:"style=form,explode=true,name=dimensionName"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    MetricName *string `queryParam:"style=form,explode=true,name=metricName"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListSecurityProfilesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListSecurityProfilesRequest struct {
    QueryParams ListSecurityProfilesQueryParams 
    Headers ListSecurityProfilesHeaders 
    
}

type ListSecurityProfilesResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ListSecurityProfilesResponse *shared.ListSecurityProfilesResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

