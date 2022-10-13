package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsForResourceQueryParams struct {
	ResourceArn string `queryParam:"style=form,explode=true,name=resourceArn"`
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
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ListTagsForResourceResponse *shared.ListTagsForResourceResponse
	ResourceInUseException      *interface{}
	ResourceNotFoundException   *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
