package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCommentContentXAmzTargetEnum string

const (
	DeleteCommentContentXAmzTargetEnumCodeCommit20150413DeleteCommentContent DeleteCommentContentXAmzTargetEnum = "CodeCommit_20150413.DeleteCommentContent"
)

type DeleteCommentContentHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteCommentContentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteCommentContentRequest struct {
	Headers DeleteCommentContentHeaders
	Request shared.DeleteCommentContentInput `request:"mediaType=application/json"`
}

type DeleteCommentContentResponse struct {
	CommentDeletedException      *interface{}
	CommentDoesNotExistException *interface{}
	CommentIDRequiredException   *interface{}
	ContentType                  string
	DeleteCommentContentOutput   *shared.DeleteCommentContentOutput
	InvalidCommentIDException    *interface{}
	StatusCode                   int64
}
