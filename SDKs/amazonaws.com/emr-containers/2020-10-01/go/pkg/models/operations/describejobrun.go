package operations

import (
"openapi/pkg/models/shared")

type DescribeJobRunPathParams struct {
    JobRunID string `pathParam:"style=simple,explode=false,name=jobRunId"`
    VirtualClusterID string `pathParam:"style=simple,explode=false,name=virtualClusterId"`
    
}

type DescribeJobRunHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeJobRunRequest struct {
    PathParams DescribeJobRunPathParams 
    Headers DescribeJobRunHeaders 
    
}

type DescribeJobRunResponse struct {
    ContentType string 
    DescribeJobRunResponse *shared.DescribeJobRunResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

