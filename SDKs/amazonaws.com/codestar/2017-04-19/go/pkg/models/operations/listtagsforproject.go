package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsForProjectXAmzTargetEnum string

const (
	ListTagsForProjectXAmzTargetEnumCodeStar20170419ListTagsForProject ListTagsForProjectXAmzTargetEnum = "CodeStar_20170419.ListTagsForProject"
)

type ListTagsForProjectHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTagsForProjectXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTagsForProjectRequest struct {
	Headers ListTagsForProjectHeaders
	Request shared.ListTagsForProjectRequest `request:"mediaType=application/json"`
}

type ListTagsForProjectResponse struct {
	ContentType               string
	InvalidNextTokenException *interface{}
	ListTagsForProjectResult  *shared.ListTagsForProjectResult
	ProjectNotFoundException  *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
