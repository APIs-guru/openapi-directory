package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeReplayXAmzTargetEnum string

const (
	DescribeReplayXAmzTargetEnumAwsEventsDescribeReplay DescribeReplayXAmzTargetEnum = "AWSEvents.DescribeReplay"
)

type DescribeReplayHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeReplayXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
