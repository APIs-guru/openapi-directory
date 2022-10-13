package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRepositoryNameXAmzTargetEnum string

const (
	UpdateRepositoryNameXAmzTargetEnumCodeCommit20150413UpdateRepositoryName UpdateRepositoryNameXAmzTargetEnum = "CodeCommit_20150413.UpdateRepositoryName"
)

type UpdateRepositoryNameHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateRepositoryNameXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateRepositoryNameRequest struct {
	Headers UpdateRepositoryNameHeaders
	Request shared.UpdateRepositoryNameInput `request:"mediaType=application/json"`
}

type UpdateRepositoryNameResponse struct {
	ContentType                     string
	InvalidRepositoryNameException  *interface{}
	RepositoryDoesNotExistException *interface{}
	RepositoryNameExistsException   *interface{}
	RepositoryNameRequiredException *interface{}
	StatusCode                      int64
}
