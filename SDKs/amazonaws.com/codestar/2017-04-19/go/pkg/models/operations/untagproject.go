package operations

import (
	"openapi/pkg/models/shared"
)

type UntagProjectXAmzTargetEnum string

const (
	UntagProjectXAmzTargetEnumCodeStar20170419UntagProject UntagProjectXAmzTargetEnum = "CodeStar_20170419.UntagProject"
)

type UntagProjectHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UntagProjectXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UntagProjectRequest struct {
	Headers UntagProjectHeaders
	Request shared.UntagProjectRequest `request:"mediaType=application/json"`
}

type UntagProjectResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	LimitExceededException          *interface{}
	ProjectNotFoundException        *interface{}
	StatusCode                      int64
	UntagProjectResult              map[string]interface{}
	ValidationException             *interface{}
}
