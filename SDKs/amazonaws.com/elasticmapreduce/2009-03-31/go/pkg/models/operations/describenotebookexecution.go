package operations

import (
"openapi/pkg/models/shared")


type DescribeNotebookExecutionXAmzTargetEnum string

const (
    DescribeNotebookExecutionXAmzTargetEnumElasticMapReduceDescribeNotebookExecution DescribeNotebookExecutionXAmzTargetEnum = "ElasticMapReduce.DescribeNotebookExecution"
)


type DescribeNotebookExecutionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeNotebookExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeNotebookExecutionRequest struct {
    Headers DescribeNotebookExecutionHeaders 
    Request shared.DescribeNotebookExecutionInput `request:"mediaType=application/json"`
    
}

type DescribeNotebookExecutionResponse struct {
    ContentType string 
    DescribeNotebookExecutionOutput *shared.DescribeNotebookExecutionOutput 
    InternalServerError *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

