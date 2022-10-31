package operations

import (
"openapi/pkg/models/shared")


type PostCommentReplyXAmzTargetEnum string

const (
    PostCommentReplyXAmzTargetEnumCodeCommit20150413PostCommentReply PostCommentReplyXAmzTargetEnum = "CodeCommit_20150413.PostCommentReply"
)


type PostCommentReplyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PostCommentReplyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PostCommentReplyRequest struct {
    Headers PostCommentReplyHeaders 
    Request shared.PostCommentReplyInput `request:"mediaType=application/json"`
    
}

type PostCommentReplyResponse struct {
    ClientRequestTokenRequiredException *interface{} 
    CommentContentRequiredException *interface{} 
    CommentContentSizeLimitExceededException *interface{} 
    CommentDoesNotExistException *interface{} 
    CommentIDRequiredException *interface{} 
    ContentType string 
    IdempotencyParameterMismatchException *interface{} 
    InvalidClientRequestTokenException *interface{} 
    InvalidCommentIDException *interface{} 
    PostCommentReplyOutput *shared.PostCommentReplyOutput 
    StatusCode int64 
    
}

