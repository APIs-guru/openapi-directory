package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProjectVisibilityXAmzTargetEnum string

const (
	UpdateProjectVisibilityXAmzTargetEnumCodeBuild20161006UpdateProjectVisibility UpdateProjectVisibilityXAmzTargetEnum = "CodeBuild_20161006.UpdateProjectVisibility"
)

type UpdateProjectVisibilityHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateProjectVisibilityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateProjectVisibilityRequest struct {
	Headers UpdateProjectVisibilityHeaders
	Request shared.UpdateProjectVisibilityInput `request:"mediaType=application/json"`
}

type UpdateProjectVisibilityResponse struct {
	ContentType                   string
	InvalidInputException         *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	UpdateProjectVisibilityOutput *shared.UpdateProjectVisibilityOutput
}
