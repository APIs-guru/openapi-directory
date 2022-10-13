package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAPIDestinationXAmzTargetEnum string

const (
	DescribeAPIDestinationXAmzTargetEnumAwsEventsDescribeAPIDestination DescribeAPIDestinationXAmzTargetEnum = "AWSEvents.DescribeApiDestination"
)

type DescribeAPIDestinationHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAPIDestinationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAPIDestinationRequest struct {
	Headers DescribeAPIDestinationHeaders
	Request shared.DescribeAPIDestinationRequest `request:"mediaType=application/json"`
}

type DescribeAPIDestinationResponse struct {
	ContentType                    string
	DescribeAPIDestinationResponse *shared.DescribeAPIDestinationResponse
	InternalException              *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
