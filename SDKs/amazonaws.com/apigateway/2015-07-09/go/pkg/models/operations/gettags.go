package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagsPathParams struct {
	ResourceArn string `pathParam:"style=simple,explode=false,name=resource_arn"`
}

type GetTagsQueryParams struct {
	Limit    *int64  `queryParam:"style=form,explode=true,name=limit"`
	Position *string `queryParam:"style=form,explode=true,name=position"`
}

type GetTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetTagsRequest struct {
	PathParams  GetTagsPathParams
	QueryParams GetTagsQueryParams
	Headers     GetTagsHeaders
}

type GetTagsResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	Tags                     *shared.Tags
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
