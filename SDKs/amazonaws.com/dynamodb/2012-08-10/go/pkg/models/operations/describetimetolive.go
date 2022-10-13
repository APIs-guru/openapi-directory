package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTimeToLiveXAmzTargetEnum string

const (
	DescribeTimeToLiveXAmzTargetEnumDynamoDb20120810DescribeTimeToLive DescribeTimeToLiveXAmzTargetEnum = "DynamoDB_20120810.DescribeTimeToLive"
)

type DescribeTimeToLiveHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTimeToLiveXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeTimeToLiveRequest struct {
	Headers DescribeTimeToLiveHeaders
	Request shared.DescribeTimeToLiveInput `request:"mediaType=application/json"`
}

type DescribeTimeToLiveResponse struct {
	ContentType               string
	DescribeTimeToLiveOutput  *shared.DescribeTimeToLiveOutput
	InternalServerError       *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
