package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeServiceXAmzTargetEnum string

const (
	DescribeServiceXAmzTargetEnumAppRunnerDescribeService DescribeServiceXAmzTargetEnum = "AppRunner.DescribeService"
)

type DescribeServiceHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeServiceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeServiceRequest struct {
	Headers DescribeServiceHeaders
	Request shared.DescribeServiceRequest `request:"mediaType=application/json"`
}

type DescribeServiceResponse struct {
	ContentType                   string
	DescribeServiceResponse       *shared.DescribeServiceResponse
	InternalServiceErrorException *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
}
