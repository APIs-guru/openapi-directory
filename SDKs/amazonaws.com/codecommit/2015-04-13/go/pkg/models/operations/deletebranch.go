package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteBranchXAmzTargetEnum string

const (
	DeleteBranchXAmzTargetEnumCodeCommit20150413DeleteBranch DeleteBranchXAmzTargetEnum = "CodeCommit_20150413.DeleteBranch"
)

type DeleteBranchHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteBranchXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteBranchRequest struct {
	Headers DeleteBranchHeaders
	Request shared.DeleteBranchInput `request:"mediaType=application/json"`
}

type DeleteBranchResponse struct {
	BranchNameRequiredException              *interface{}
	ContentType                              string
	DefaultBranchCannotBeDeletedException    *interface{}
	DeleteBranchOutput                       *shared.DeleteBranchOutput
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
