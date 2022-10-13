package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTaskXAmzTargetEnum string

const (
	DescribeTaskXAmzTargetEnumFmrsServiceDescribeTask DescribeTaskXAmzTargetEnum = "FmrsService.DescribeTask"
)

type DescribeTaskHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeTaskRequest struct {
	Headers DescribeTaskHeaders
	Request shared.DescribeTaskRequest `request:"mediaType=application/json"`
}

type DescribeTaskResponse struct {
	ContentType             string
	DescribeTaskResponse    *shared.DescribeTaskResponse
	InternalException       *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
