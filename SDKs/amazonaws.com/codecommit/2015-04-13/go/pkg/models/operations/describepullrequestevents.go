package operations

import (
	"openapi/pkg/models/shared"
)

type DescribePullRequestEventsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribePullRequestEventsXAmzTargetEnum string

const (
	DescribePullRequestEventsXAmzTargetEnumCodeCommit20150413DescribePullRequestEvents DescribePullRequestEventsXAmzTargetEnum = "CodeCommit_20150413.DescribePullRequestEvents"
)

type DescribePullRequestEventsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribePullRequestEventsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribePullRequestEventsRequest struct {
	QueryParams DescribePullRequestEventsQueryParams
	Headers     DescribePullRequestEventsHeaders
	Request     shared.DescribePullRequestEventsInput `request:"mediaType=application/json"`
}

type DescribePullRequestEventsResponse struct {
	ActorDoesNotExistException               *interface{}
	ContentType                              string
	DescribePullRequestEventsOutput          *shared.DescribePullRequestEventsOutput
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	InvalidActorArnException                 *interface{}
	InvalidContinuationTokenException        *interface{}
	InvalidMaxResultsException               *interface{}
	InvalidPullRequestEventTypeException     *interface{}
	InvalidPullRequestIDException            *interface{}
	PullRequestDoesNotExistException         *interface{}
	PullRequestIDRequiredException           *interface{}
	StatusCode                               int64
}
