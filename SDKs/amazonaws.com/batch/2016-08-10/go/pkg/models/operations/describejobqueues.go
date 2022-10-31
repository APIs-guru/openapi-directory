package operations

import (
"openapi/pkg/models/shared")

type DescribeJobQueuesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type DescribeJobQueuesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeJobQueuesRequestBody struct {
    JobQueues []string `json:"jobQueues,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

type DescribeJobQueuesRequest struct {
    QueryParams DescribeJobQueuesQueryParams 
    Headers DescribeJobQueuesHeaders 
    Request DescribeJobQueuesRequestBody `request:"mediaType=application/json"`
    
}

type DescribeJobQueuesResponse struct {
    ClientException *interface{} 
    ContentType string 
    DescribeJobQueuesResponse *shared.DescribeJobQueuesResponse 
    ServerException *interface{} 
    StatusCode int64 
    
}

