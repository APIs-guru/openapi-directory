package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProjectXAmzTargetEnum string

const (
	UpdateProjectXAmzTargetEnumCodeStar20170419UpdateProject UpdateProjectXAmzTargetEnum = "CodeStar_20170419.UpdateProject"
)

type UpdateProjectHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateProjectXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateProjectRequest struct {
	Headers UpdateProjectHeaders
	Request shared.UpdateProjectRequest `request:"mediaType=application/json"`
}

type UpdateProjectResponse struct {
	ContentType              string
	ProjectNotFoundException *interface{}
	StatusCode               int64
	UpdateProjectResult      map[string]interface{}
	ValidationException      *interface{}
}
