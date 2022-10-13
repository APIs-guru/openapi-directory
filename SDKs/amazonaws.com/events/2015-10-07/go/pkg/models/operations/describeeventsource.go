package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEventSourceXAmzTargetEnum string

const (
	DescribeEventSourceXAmzTargetEnumAwsEventsDescribeEventSource DescribeEventSourceXAmzTargetEnum = "AWSEvents.DescribeEventSource"
)

type DescribeEventSourceHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEventSourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeEventSourceRequest struct {
	Headers DescribeEventSourceHeaders
	Request shared.DescribeEventSourceRequest `request:"mediaType=application/json"`
}

type DescribeEventSourceResponse struct {
	ContentType                 string
	DescribeEventSourceResponse *shared.DescribeEventSourceResponse
	InternalException           *interface{}
	OperationDisabledException  *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
}
