package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDefaultBranchXAmzTargetEnum string

const (
	UpdateDefaultBranchXAmzTargetEnumCodeCommit20150413UpdateDefaultBranch UpdateDefaultBranchXAmzTargetEnum = "CodeCommit_20150413.UpdateDefaultBranch"
)

type UpdateDefaultBranchHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateDefaultBranchXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateDefaultBranchRequest struct {
	Headers UpdateDefaultBranchHeaders
	Request shared.UpdateDefaultBranchInput `request:"mediaType=application/json"`
}

type UpdateDefaultBranchResponse struct {
	BranchDoesNotExistException              *interface{}
	BranchNameRequiredException              *interface{}
	ContentType                              string
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	InvalidBranchNameException               *interface{}
	InvalidRepositoryNameException           *interface{}
	RepositoryDoesNotExistException          *interface{}
	RepositoryNameRequiredException          *interface{}
	StatusCode                               int64
}
