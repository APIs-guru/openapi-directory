package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCommentXAmzTargetEnum string

const (
	UpdateCommentXAmzTargetEnumCodeCommit20150413UpdateComment UpdateCommentXAmzTargetEnum = "CodeCommit_20150413.UpdateComment"
)

type UpdateCommentHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateCommentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateCommentRequest struct {
	Headers UpdateCommentHeaders
	Request shared.UpdateCommentInput `request:"mediaType=application/json"`
}

type UpdateCommentResponse struct {
	CommentContentRequiredException          *interface{}
	CommentContentSizeLimitExceededException *interface{}
	CommentDeletedException                  *interface{}
	CommentDoesNotExistException             *interface{}
	CommentIDRequiredException               *interface{}
	CommentNotCreatedByCallerException       *interface{}
	ContentType                              string
	InvalidCommentIDException                *interface{}
	StatusCode                               int64
	UpdateCommentOutput                      *shared.UpdateCommentOutput
}
