package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommentsForPullRequestQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetCommentsForPullRequestXAmzTargetEnum string

const (
	GetCommentsForPullRequestXAmzTargetEnumCodeCommit20150413GetCommentsForPullRequest GetCommentsForPullRequestXAmzTargetEnum = "CodeCommit_20150413.GetCommentsForPullRequest"
)

type GetCommentsForPullRequestHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCommentsForPullRequestXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetCommentsForPullRequestRequest struct {
	QueryParams GetCommentsForPullRequestQueryParams
	Headers     GetCommentsForPullRequestHeaders
	Request     shared.GetCommentsForPullRequestInput `request:"mediaType=application/json"`
}

type GetCommentsForPullRequestResponse struct {
	CommitDoesNotExistException                     *interface{}
	CommitIDRequiredException                       *interface{}
	ContentType                                     string
	EncryptionIntegrityChecksFailedException        *interface{}
	EncryptionKeyAccessDeniedException              *interface{}
	EncryptionKeyDisabledException                  *interface{}
	EncryptionKeyNotFoundException                  *interface{}
	EncryptionKeyUnavailableException               *interface{}
	GetCommentsForPullRequestOutput                 *shared.GetCommentsForPullRequestOutput
	InvalidCommitIDException                        *interface{}
	InvalidContinuationTokenException               *interface{}
	InvalidMaxResultsException                      *interface{}
	InvalidPullRequestIDException                   *interface{}
	InvalidRepositoryNameException                  *interface{}
	PullRequestDoesNotExistException                *interface{}
	PullRequestIDRequiredException                  *interface{}
	RepositoryDoesNotExistException                 *interface{}
	RepositoryNameRequiredException                 *interface{}
	RepositoryNotAssociatedWithPullRequestException *interface{}
	StatusCode                                      int64
}
