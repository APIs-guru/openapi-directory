package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeReplayXAmzTargetEnum string

const (
	DescribeReplayXAmzTargetEnumAwsEventsDescribeReplay DescribeReplayXAmzTargetEnum = "AWSEvents.DescribeReplay"
)

type DescribeReplayHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeReplayXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeReplayRequest struct {
	Headers DescribeReplayHeaders
	Request shared.DescribeReplayRequest `request:"mediaType=application/json"`
}

type DescribeReplayResponse struct {
	ContentType               string
	DescribeReplayResponse    *shared.DescribeReplayResponse
	InternalException         *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
