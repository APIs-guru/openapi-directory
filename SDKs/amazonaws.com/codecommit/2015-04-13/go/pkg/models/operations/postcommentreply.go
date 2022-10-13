package operations

import (
	"openapi/pkg/models/shared"
)

type PostCommentReplyXAmzTargetEnum string

const (
	PostCommentReplyXAmzTargetEnumCodeCommit20150413PostCommentReply PostCommentReplyXAmzTargetEnum = "CodeCommit_20150413.PostCommentReply"
)

type PostCommentReplyHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PostCommentReplyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PostCommentReplyRequest struct {
	Headers PostCommentReplyHeaders
	Request shared.PostCommentReplyInput `request:"mediaType=application/json"`
}

type PostCommentReplyResponse struct {
	ClientRequestTokenRequiredException      *interface{}
	CommentContentRequiredException          *interface{}
	CommentContentSizeLimitExceededException *interface{}
	CommentDoesNotExistException             *interface{}
	CommentIDRequiredException               *interface{}
	ContentType                              string
	IdempotencyParameterMismatchException    *interface{}
	InvalidClientRequestTokenException       *interface{}
	InvalidCommentIDException                *interface{}
	PostCommentReplyOutput                   *shared.PostCommentReplyOutput
	StatusCode                               int64
}
