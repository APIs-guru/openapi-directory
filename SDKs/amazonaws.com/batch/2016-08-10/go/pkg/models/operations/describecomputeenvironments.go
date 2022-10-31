package operations

import (
"openapi/pkg/models/shared")

type DescribeComputeEnvironmentsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type DescribeComputeEnvironmentsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeComputeEnvironmentsRequestBody struct {
    ComputeEnvironments []string `json:"computeEnvironments,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

type DescribeComputeEnvironmentsRequest struct {
    QueryParams DescribeComputeEnvironmentsQueryParams 
    Headers DescribeComputeEnvironmentsHeaders 
    Request DescribeComputeEnvironmentsRequestBody `request:"mediaType=application/json"`
    
}

type DescribeComputeEnvironmentsResponse struct {
    ClientException *interface{} 
    ContentType string 
    DescribeComputeEnvironmentsResponse *shared.DescribeComputeEnvironmentsResponse 
    ServerException *interface{} 
    StatusCode int64 
    
}

