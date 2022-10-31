package operations

import (
"openapi/pkg/models/shared")


type DeleteCommentContentXAmzTargetEnum string

const (
    DeleteCommentContentXAmzTargetEnumCodeCommit20150413DeleteCommentContent DeleteCommentContentXAmzTargetEnum = "CodeCommit_20150413.DeleteCommentContent"
)


type DeleteCommentContentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteCommentContentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteCommentContentRequest struct {
    Headers DeleteCommentContentHeaders 
    Request shared.DeleteCommentContentInput `request:"mediaType=application/json"`
    
}

type DeleteCommentContentResponse struct {
    CommentDeletedException *interface{} 
    CommentDoesNotExistException *interface{} 
    CommentIDRequiredException *interface{} 
    ContentType string 
    DeleteCommentContentOutput *shared.DeleteCommentContentOutput 
    InvalidCommentIDException *interface{} 
    StatusCode int64 
    
}

