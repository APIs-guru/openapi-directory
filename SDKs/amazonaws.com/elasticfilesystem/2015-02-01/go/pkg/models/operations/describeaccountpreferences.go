package operations

import (
"openapi/pkg/models/shared")

type DescribeAccountPreferencesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeAccountPreferencesRequestBody struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

type DescribeAccountPreferencesRequest struct {
    Headers DescribeAccountPreferencesHeaders 
    Request DescribeAccountPreferencesRequestBody `request:"mediaType=application/json"`
    
}

type DescribeAccountPreferencesResponse struct {
    ContentType string 
    DescribeAccountPreferencesResponse *shared.DescribeAccountPreferencesResponse 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

