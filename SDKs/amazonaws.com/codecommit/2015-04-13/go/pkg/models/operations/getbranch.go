package operations

import (
	"openapi/pkg/models/shared"
)

type GetBranchXAmzTargetEnum string

const (
	GetBranchXAmzTargetEnumCodeCommit20150413GetBranch GetBranchXAmzTargetEnum = "CodeCommit_20150413.GetBranch"
)

type GetBranchHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetBranchXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetBranchRequest struct {
	Headers GetBranchHeaders
	Request shared.GetBranchInput `request:"mediaType=application/json"`
}

type GetBranchResponse struct {
	BranchDoesNotExistException              *interface{}
	BranchNameRequiredException              *interface{}
	ContentType                              string
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	GetBranchOutput                          *shared.GetBranchOutput
	InvalidBranchNameException               *interface{}
	InvalidRepositoryNameException           *interface{}
	RepositoryDoesNotExistException          *interface{}
	RepositoryNameRequiredException          *interface{}
	StatusCode                               int64
}
