package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProjectXAmzTargetEnum string

const (
	UpdateProjectXAmzTargetEnumCodeBuild20161006UpdateProject UpdateProjectXAmzTargetEnum = "CodeBuild_20161006.UpdateProject"
)

type UpdateProjectHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateProjectXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateProjectRequest struct {
	Headers UpdateProjectHeaders
	Request shared.UpdateProjectInput `request:"mediaType=application/json"`
}

type UpdateProjectResponse struct {
	ContentType               string
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateProjectOutput       *shared.UpdateProjectOutput
}
