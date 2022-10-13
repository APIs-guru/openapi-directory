package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsForResourceXAmzTargetEnum string

const (
	ListTagsForResourceXAmzTargetEnumGameLiftListTagsForResource ListTagsForResourceXAmzTargetEnum = "GameLift.ListTagsForResource"
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
	Headers ListTagsForResourceHeaders
	Request shared.ListTagsForResourceRequest `request:"mediaType=application/json"`
}

type ListTagsForResourceResponse struct {
	ContentType                 string
	InternalServiceException    *interface{}
	InvalidRequestException     *interface{}
	ListTagsForResourceResponse *shared.ListTagsForResourceResponse
	NotFoundException           *interface{}
	StatusCode                  int64
	TaggingFailedException      *interface{}
}
