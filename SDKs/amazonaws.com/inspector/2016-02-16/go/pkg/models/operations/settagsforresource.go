package operations

import (
	"openapi/pkg/models/shared"
)

type SetTagsForResourceXAmzTargetEnum string

const (
	SetTagsForResourceXAmzTargetEnumInspectorServiceSetTagsForResource SetTagsForResourceXAmzTargetEnum = "InspectorService.SetTagsForResource"
)

type SetTagsForResourceHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SetTagsForResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SetTagsForResourceRequest struct {
	Headers SetTagsForResourceHeaders
	Request shared.SetTagsForResourceRequest `request:"mediaType=application/json"`
}

type SetTagsForResourceResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	InternalException                      *interface{}
	InvalidInputException                  *interface{}
	NoSuchEntityException                  *interface{}
	ServiceTemporarilyUnavailableException *interface{}
	StatusCode                             int64
}
