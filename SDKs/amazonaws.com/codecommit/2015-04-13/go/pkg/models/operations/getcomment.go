package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommentXAmzTargetEnum string

const (
	GetCommentXAmzTargetEnumCodeCommit20150413GetComment GetCommentXAmzTargetEnum = "CodeCommit_20150413.GetComment"
)

type GetCommentHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCommentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetCommentRequest struct {
	Headers GetCommentHeaders
	Request shared.GetCommentInput `request:"mediaType=application/json"`
}

type GetCommentResponse struct {
	CommentDeletedException                  *interface{}
	CommentDoesNotExistException             *interface{}
	CommentIDRequiredException               *interface{}
	ContentType                              string
	EncryptionIntegrityChecksFailedException *interface{}
	EncryptionKeyAccessDeniedException       *interface{}
	EncryptionKeyDisabledException           *interface{}
	EncryptionKeyNotFoundException           *interface{}
	EncryptionKeyUnavailableException        *interface{}
	GetCommentOutput                         *shared.GetCommentOutput
	InvalidCommentIDException                *interface{}
	StatusCode                               int64
}
