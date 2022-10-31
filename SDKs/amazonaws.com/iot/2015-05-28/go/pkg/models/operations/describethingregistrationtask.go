package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeThingRegistrationTaskPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
}

type DescribeThingRegistrationTaskHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeThingRegistrationTaskRequest struct {
	PathParams DescribeThingRegistrationTaskPathParams
	Headers    DescribeThingRegistrationTaskHeaders
}

type DescribeThingRegistrationTaskResponse struct {
	ContentType                           string
	DescribeThingRegistrationTaskResponse *shared.DescribeThingRegistrationTaskResponse
	InternalFailureException              *interface{}
	InvalidRequestException               *interface{}
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
	ThrottlingException                   *interface{}
	UnauthorizedException                 *interface{}
}
