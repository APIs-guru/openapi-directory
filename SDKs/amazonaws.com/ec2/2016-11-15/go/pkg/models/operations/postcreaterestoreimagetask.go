package operations




type PostCreateRestoreImageTaskActionEnum string

const (
    PostCreateRestoreImageTaskActionEnumCreateRestoreImageTask PostCreateRestoreImageTaskActionEnum = "CreateRestoreImageTask"
)



type PostCreateRestoreImageTaskVersionEnum string

const (
    PostCreateRestoreImageTaskVersionEnumTwoThousandAndSixteen1115 PostCreateRestoreImageTaskVersionEnum = "2016-11-15"
)


type PostCreateRestoreImageTaskQueryParams struct {
    Action PostCreateRestoreImageTaskActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateRestoreImageTaskVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateRestoreImageTaskHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateRestoreImageTaskRequest struct {
    QueryParams PostCreateRestoreImageTaskQueryParams 
    Headers PostCreateRestoreImageTaskHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateRestoreImageTaskResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

