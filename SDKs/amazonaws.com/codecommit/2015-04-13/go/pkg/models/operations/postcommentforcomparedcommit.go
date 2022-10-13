package operations

import (
	"openapi/pkg/models/shared"
)

type PostCommentForComparedCommitXAmzTargetEnum string

const (
	PostCommentForComparedCommitXAmzTargetEnumCodeCommit20150413PostCommentForComparedCommit PostCommentForComparedCommitXAmzTargetEnum = "CodeCommit_20150413.PostCommentForComparedCommit"
)

type PostCommentForComparedCommitHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PostCommentForComparedCommitXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PostCommentForComparedCommitRequest struct {
	Headers PostCommentForComparedCommitHeaders
	Request shared.PostCommentForComparedCommitInput `request:"mediaType=application/json"`
}

type PostCommentForComparedCommitResponse struct {
	BeforeCommitIDAndAfterCommitIDAreSameException *interface{}
	ClientRequestTokenRequiredException            *interface{}
	CommentContentRequiredException                *interface{}
	CommentContentSizeLimitExceededException       *interface{}
	CommitDoesNotExistException                    *interface{}
	CommitIDRequiredException                      *interface{}
	ContentType                                    string
	EncryptionIntegrityChecksFailedException       *interface{}
	EncryptionKeyAccessDeniedException             *interface{}
	EncryptionKeyDisabledException                 *interface{}
	EncryptionKeyNotFoundException                 *interface{}
	EncryptionKeyUnavailableException              *interface{}
	IdempotencyParameterMismatchException          *interface{}
	InvalidClientRequestTokenException             *interface{}
	InvalidCommitIDException                       *interface{}
	InvalidFileLocationException                   *interface{}
	InvalidFilePositionException                   *interface{}
	InvalidPathException                           *interface{}
	InvalidRelativeFileVersionEnumException        *interface{}
	InvalidRepositoryNameException                 *interface{}
	PathDoesNotExistException                      *interface{}
	PathRequiredException                          *interface{}
	PostCommentForComparedCommitOutput             *shared.PostCommentForComparedCommitOutput
	RepositoryDoesNotExistException                *interface{}
	RepositoryNameRequiredException                *interface{}
	StatusCode                                     int64
}
