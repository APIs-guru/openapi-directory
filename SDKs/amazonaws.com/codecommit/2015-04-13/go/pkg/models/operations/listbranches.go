package operations

import (
	"openapi/pkg/models/shared"
)

type ListBranchesQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListBranchesXAmzTargetEnum string

const (
	ListBranchesXAmzTargetEnumCodeCommit20150413ListBranches ListBranchesXAmzTargetEnum = "CodeCommit_20150413.ListBranches"
)

type ListBranchesHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListBranchesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListBranchesRequest struct {
	QueryParams ListBranchesQueryParams
	Headers     ListBranchesHeaders
	Request     shared.ListBranchesInput `request:"mediaType=application/json"`
}

type ListBranchesResponse struct {
	ContentType                              string
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	InvalidContinuationTokenException        *interface{}
	InvalidRepositoryNameException           *interface{}
	ListBranchesOutput                       *shared.ListBranchesOutput
	RepositoryDoesNotExistException          *interface{}
	RepositoryNameRequiredException          *interface{}
	StatusCode                               int64
}
