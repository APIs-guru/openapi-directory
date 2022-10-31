package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTaskExecutionXAmzTargetEnum string

const (
	DescribeTaskExecutionXAmzTargetEnumFmrsServiceDescribeTaskExecution DescribeTaskExecutionXAmzTargetEnum = "FmrsService.DescribeTaskExecution"
)

type DescribeTaskExecutionHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTaskExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeTaskExecutionRequest struct {
	Headers DescribeTaskExecutionHeaders
	Request shared.DescribeTaskExecutionRequest `request:"mediaType=application/json"`
}

type DescribeTaskExecutionResponse struct {
	ContentType                   string
	DescribeTaskExecutionResponse *shared.DescribeTaskExecutionResponse
	InternalException             *interface{}
	InvalidRequestException       *interface{}
	StatusCode                    int64
}
