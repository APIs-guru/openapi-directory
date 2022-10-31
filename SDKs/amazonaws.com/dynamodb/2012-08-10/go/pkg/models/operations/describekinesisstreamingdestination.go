package operations

import (
"openapi/pkg/models/shared")


type DescribeKinesisStreamingDestinationXAmzTargetEnum string

const (
    DescribeKinesisStreamingDestinationXAmzTargetEnumDynamoDb20120810DescribeKinesisStreamingDestination DescribeKinesisStreamingDestinationXAmzTargetEnum = "DynamoDB_20120810.DescribeKinesisStreamingDestination"
)


type DescribeKinesisStreamingDestinationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeKinesisStreamingDestinationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeKinesisStreamingDestinationRequest struct {
    Headers DescribeKinesisStreamingDestinationHeaders 
    Request shared.DescribeKinesisStreamingDestinationInput `request:"mediaType=application/json"`
    
}

type DescribeKinesisStreamingDestinationResponse struct {
    ContentType string 
    DescribeKinesisStreamingDestinationOutput *shared.DescribeKinesisStreamingDestinationOutput 
    InternalServerError *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

