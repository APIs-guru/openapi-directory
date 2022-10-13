package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeInstancesQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeInstancesXAmzTargetEnum string

const (
	DescribeInstancesXAmzTargetEnumGameLiftDescribeInstances DescribeInstancesXAmzTargetEnum = "GameLift.DescribeInstances"
)

type DescribeInstancesHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeInstancesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeInstancesRequest struct {
	QueryParams DescribeInstancesQueryParams
	Headers     DescribeInstancesHeaders
	Request     shared.DescribeInstancesInput `request:"mediaType=application/json"`
}

type DescribeInstancesResponse struct {
	ContentType              string
	DescribeInstancesOutput  *shared.DescribeInstancesOutput
	InternalServiceException *interface{}
	InvalidRequestException  *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	UnauthorizedException    *interface{}
}
