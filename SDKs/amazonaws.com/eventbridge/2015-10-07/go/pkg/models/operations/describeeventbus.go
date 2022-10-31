package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEventBusXAmzTargetEnum string

const (
	DescribeEventBusXAmzTargetEnumAwsEventsDescribeEventBus DescribeEventBusXAmzTargetEnum = "AWSEvents.DescribeEventBus"
)

type DescribeEventBusHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEventBusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
