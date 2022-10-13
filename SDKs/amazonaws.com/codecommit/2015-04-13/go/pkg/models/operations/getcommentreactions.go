package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommentReactionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetCommentReactionsXAmzTargetEnum string

const (
	GetCommentReactionsXAmzTargetEnumCodeCommit20150413GetCommentReactions GetCommentReactionsXAmzTargetEnum = "CodeCommit_20150413.GetCommentReactions"
)

type GetCommentReactionsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCommentReactionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetCommentReactionsRequest struct {
	QueryParams GetCommentReactionsQueryParams
	Headers     GetCommentReactionsHeaders
	Request     shared.GetCommentReactionsInput `request:"mediaType=application/json"`
}

type GetCommentReactionsResponse struct {
	CommentDeletedException           *interface{}
	CommentDoesNotExistException      *interface{}
	CommentIDRequiredException        *interface{}
	ContentType                       string
	GetCommentReactionsOutput         *shared.GetCommentReactionsOutput
	InvalidCommentIDException         *interface{}
	InvalidContinuationTokenException *interface{}
	InvalidMaxResultsException        *interface{}
	InvalidReactionUserArnException   *interface{}
	StatusCode                        int64
}
