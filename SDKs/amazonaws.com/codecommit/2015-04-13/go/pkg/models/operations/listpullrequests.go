package operations

import (
	"openapi/pkg/models/shared"
)

type ListPullRequestsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListPullRequestsXAmzTargetEnum string

const (
	ListPullRequestsXAmzTargetEnumCodeCommit20150413ListPullRequests ListPullRequestsXAmzTargetEnum = "CodeCommit_20150413.ListPullRequests"
)

type ListPullRequestsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListPullRequestsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListPullRequestsRequest struct {
	QueryParams ListPullRequestsQueryParams
	Headers     ListPullRequestsHeaders
	Request     shared.ListPullRequestsInput `request:"mediaType=application/json"`
}

type ListPullRequestsResponse struct {
	AuthorDoesNotExistException              *interface{}
	ContentType                              string
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	InvalidAuthorArnException                *interface{}
	InvalidContinuationTokenException        *interface{}
	InvalidMaxResultsException               *interface{}
	InvalidPullRequestStatusException        *interface{}
	InvalidRepositoryNameException           *interface{}
	ListPullRequestsOutput                   *shared.ListPullRequestsOutput
	RepositoryDoesNotExistException          *interface{}
	RepositoryNameRequiredException          *interface{}
	StatusCode                               int64
}
