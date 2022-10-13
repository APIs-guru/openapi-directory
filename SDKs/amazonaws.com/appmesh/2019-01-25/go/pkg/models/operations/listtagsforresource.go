package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsForResourceQueryParams struct {
	Limit       *int64  `queryParam:"style=form,explode=true,name=limit"`
	NextToken   *string `queryParam:"style=form,explode=true,name=nextToken"`
	ResourceArn string  `queryParam:"style=form,explode=true,name=resourceArn"`
}

type ListTagsForResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListTagsForResourceRequest struct {
	QueryParams ListTagsForResourceQueryParams
	Headers     ListTagsForResourceHeaders
}

type ListTagsForResourceResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	ListTagsForResourceOutput    *shared.ListTagsForResourceOutput
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
