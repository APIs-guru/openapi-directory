package operations

import (
"openapi/pkg/models/shared")

type DescribeJobsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeJobsRequestBody struct {
    Jobs []string `json:"jobs"`
    
}

type DescribeJobsRequest struct {
    Headers DescribeJobsHeaders 
    Request DescribeJobsRequestBody `request:"mediaType=application/json"`
    
}

type DescribeJobsResponse struct {
    ClientException *interface{} 
    ContentType string 
    DescribeJobsResponse *shared.DescribeJobsResponse 
    ServerException *interface{} 
    StatusCode int64 
    
}

