package operations

import (
	"openapi/pkg/models/shared"
)

type PostCommentForPullRequestXAmzTargetEnum string

const (
	PostCommentForPullRequestXAmzTargetEnumCodeCommit20150413PostCommentForPullRequest PostCommentForPullRequestXAmzTargetEnum = "CodeCommit_20150413.PostCommentForPullRequest"
)

type PostCommentForPullRequestHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PostCommentForPullRequestXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PostCommentForPullRequestRequest struct {
	Headers PostCommentForPullRequestHeaders
	Request shared.PostCommentForPullRequestInput `request:"mediaType=application/json"`
}

type PostCommentForPullRequestResponse struct {
	BeforeCommitIDAndAfterCommitIDAreSameException  *interface{}
	ClientRequestTokenRequiredException             *interface{}
	CommentContentRequiredException                 *interface{}
	CommentContentSizeLimitExceededException        *interface{}
	CommitDoesNotExistException                     *interface{}
	CommitIDRequiredException                       *interface{}
	ContentType                                     string
	EncryptionIntegrityChecksFailedException        *interface{}
	EncryptionKeyAccessDeniedException              *interface{}
	EncryptionKeyDisabledException                  *interface{}
	EncryptionKeyNotFoundException                  *interface{}
	EncryptionKeyUnavailableException               *interface{}
	IdempotencyParameterMismatchException           *interface{}
	InvalidClientRequestTokenException              *interface{}
	InvalidCommitIDException                        *interface{}
	InvalidFileLocationException                    *interface{}
	InvalidFilePositionException                    *interface{}
	InvalidPathException                            *interface{}
	InvalidPullRequestIDException                   *interface{}
	InvalidRelativeFileVersionEnumException         *interface{}
	InvalidRepositoryNameException                  *interface{}
	PathDoesNotExistException                       *interface{}
	PathRequiredException                           *interface{}
	PostCommentForPullRequestOutput                 *shared.PostCommentForPullRequestOutput
	PullRequestDoesNotExistException                *interface{}
	PullRequestIDRequiredException                  *interface{}
	RepositoryDoesNotExistException                 *interface{}
	RepositoryNameRequiredException                 *interface{}
	RepositoryNotAssociatedWithPullRequestException *interface{}
	StatusCode                                      int64
}
