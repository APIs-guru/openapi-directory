package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTaskXAmzTargetEnum string

const (
	DescribeTaskXAmzTargetEnumFmrsServiceDescribeTask DescribeTaskXAmzTargetEnum = "FmrsService.DescribeTask"
)

type DescribeTaskHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTaskXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
