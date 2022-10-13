package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsForResourceQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListTagsForResourceXAmzTargetEnum string

const (
	ListTagsForResourceXAmzTargetEnumAwsSimbaAPIServiceV20180301ListTagsForResource ListTagsForResourceXAmzTargetEnum = "AWSSimbaAPIService_v20180301.ListTagsForResource"
)

type ListTagsForResourceHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTagsForResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTagsForResourceRequest struct {
	QueryParams ListTagsForResourceQueryParams
	Headers     ListTagsForResourceHeaders
	Request     shared.ListTagsForResourceRequest `request:"mediaType=application/json"`
}

type ListTagsForResourceResponse struct {
	BadRequest                    *interface{}
	ContentType                   string
	InternalServerError           *interface{}
	ListTagsForResourceResponse   *shared.ListTagsForResourceResponse
	NotServiceResourceError       *interface{}
	ResourceDoesNotSupportTagging *interface{}
	ResourceNotFound              *interface{}
	StatusCode                    int64
}
