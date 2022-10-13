package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEventBusXAmzTargetEnum string

const (
	DescribeEventBusXAmzTargetEnumAwsEventsDescribeEventBus DescribeEventBusXAmzTargetEnum = "AWSEvents.DescribeEventBus"
)

type DescribeEventBusHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEventBusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeEventBusRequest struct {
	Headers DescribeEventBusHeaders
	Request shared.DescribeEventBusRequest `request:"mediaType=application/json"`
}

type DescribeEventBusResponse struct {
	ContentType               string
	DescribeEventBusResponse  *shared.DescribeEventBusResponse
	InternalException         *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
