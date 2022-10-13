package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProjectXAmzTargetEnum string

const (
	DeleteProjectXAmzTargetEnumCodeBuild20161006DeleteProject DeleteProjectXAmzTargetEnum = "CodeBuild_20161006.DeleteProject"
)

type DeleteProjectHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteProjectXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteProjectRequest struct {
	Headers DeleteProjectHeaders
	Request shared.DeleteProjectInput `request:"mediaType=application/json"`
}

type DeleteProjectResponse struct {
	ContentType           string
	DeleteProjectOutput   map[string]interface{}
	InvalidInputException *interface{}
	StatusCode            int64
}
