package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveTagsFromResourceXAmzTargetEnum string

const (
	RemoveTagsFromResourceXAmzTargetEnumCloudHsmFrontendServiceRemoveTagsFromResource RemoveTagsFromResourceXAmzTargetEnum = "CloudHsmFrontendService.RemoveTagsFromResource"
)

type RemoveTagsFromResourceHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveTagsFromResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RemoveTagsFromResourceRequest struct {
	Headers RemoveTagsFromResourceHeaders
	Request shared.RemoveTagsFromResourceRequest `request:"mediaType=application/json"`
}

type RemoveTagsFromResourceResponse struct {
	CloudHsmInternalException      *interface{}
	CloudHsmServiceException       *interface{}
	ContentType                    string
	InvalidRequestException        *interface{}
	RemoveTagsFromResourceResponse *shared.RemoveTagsFromResourceResponse
	StatusCode                     int64
}
