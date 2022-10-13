package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeThingTypePathParams struct {
	ThingTypeName string `pathParam:"style=simple,explode=false,name=thingTypeName"`
}

type DescribeThingTypeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeThingTypeRequest struct {
	PathParams DescribeThingTypePathParams
	Headers    DescribeThingTypeHeaders
}

type DescribeThingTypeResponse struct {
	ContentType                 string
	DescribeThingTypeResponse   *shared.DescribeThingTypeResponse
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
