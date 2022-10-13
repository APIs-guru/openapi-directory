package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePartnerEventSourceXAmzTargetEnum string

const (
	DescribePartnerEventSourceXAmzTargetEnumAwsEventsDescribePartnerEventSource DescribePartnerEventSourceXAmzTargetEnum = "AWSEvents.DescribePartnerEventSource"
)

type DescribePartnerEventSourceHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePartnerEventSourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribePartnerEventSourceRequest struct {
	Headers DescribePartnerEventSourceHeaders
	Request shared.DescribePartnerEventSourceRequest `request:"mediaType=application/json"`
}

type DescribePartnerEventSourceResponse struct {
	ContentType                        string
	DescribePartnerEventSourceResponse *shared.DescribePartnerEventSourceResponse
	InternalException                  *interface{}
	OperationDisabledException         *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
}
