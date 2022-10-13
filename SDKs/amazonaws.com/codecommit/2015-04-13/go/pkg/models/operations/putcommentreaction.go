package operations

import (
	"openapi/pkg/models/shared"
)

type PutCommentReactionXAmzTargetEnum string

const (
	PutCommentReactionXAmzTargetEnumCodeCommit20150413PutCommentReaction PutCommentReactionXAmzTargetEnum = "CodeCommit_20150413.PutCommentReaction"
)

type PutCommentReactionHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutCommentReactionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutCommentReactionRequest struct {
	Headers PutCommentReactionHeaders
	Request shared.PutCommentReactionInput `request:"mediaType=application/json"`
}

type PutCommentReactionResponse struct {
	CommentDeletedException        *interface{}
	CommentDoesNotExistException   *interface{}
	CommentIDRequiredException     *interface{}
	ContentType                    string
	InvalidCommentIDException      *interface{}
	InvalidReactionValueException  *interface{}
	ReactionLimitExceededException *interface{}
	ReactionValueRequiredException *interface{}
	StatusCode                     int64
}
