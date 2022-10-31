package operations

import (
"openapi/pkg/models/shared")


type DescribeJobFlowsXAmzTargetEnum string

const (
    DescribeJobFlowsXAmzTargetEnumElasticMapReduceDescribeJobFlows DescribeJobFlowsXAmzTargetEnum = "ElasticMapReduce.DescribeJobFlows"
)


type DescribeJobFlowsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeJobFlowsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeJobFlowsRequest struct {
    Headers DescribeJobFlowsHeaders 
    Request shared.DescribeJobFlowsInput `request:"mediaType=application/json"`
    
}

type DescribeJobFlowsResponse struct {
    ContentType string 
    DescribeJobFlowsOutput *shared.DescribeJobFlowsOutput 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

