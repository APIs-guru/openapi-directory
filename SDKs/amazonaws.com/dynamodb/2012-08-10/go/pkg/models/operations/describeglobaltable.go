package operations

import (
"openapi/pkg/models/shared")


type DescribeGlobalTableXAmzTargetEnum string

const (
    DescribeGlobalTableXAmzTargetEnumDynamoDb20120810DescribeGlobalTable DescribeGlobalTableXAmzTargetEnum = "DynamoDB_20120810.DescribeGlobalTable"
)


type DescribeGlobalTableHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeGlobalTableXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeGlobalTableRequest struct {
    Headers DescribeGlobalTableHeaders 
    Request shared.DescribeGlobalTableInput `request:"mediaType=application/json"`
    
}

type DescribeGlobalTableResponse struct {
    ContentType string 
    DescribeGlobalTableOutput *shared.DescribeGlobalTableOutput 
    GlobalTableNotFoundException *interface{} 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

