package operations




type PostCreateReplaceRootVolumeTaskActionEnum string

const (
    PostCreateReplaceRootVolumeTaskActionEnumCreateReplaceRootVolumeTask PostCreateReplaceRootVolumeTaskActionEnum = "CreateReplaceRootVolumeTask"
)



type PostCreateReplaceRootVolumeTaskVersionEnum string

const (
    PostCreateReplaceRootVolumeTaskVersionEnumTwoThousandAndSixteen1115 PostCreateReplaceRootVolumeTaskVersionEnum = "2016-11-15"
)


type PostCreateReplaceRootVolumeTaskQueryParams struct {
    Action PostCreateReplaceRootVolumeTaskActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateReplaceRootVolumeTaskVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateReplaceRootVolumeTaskHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateReplaceRootVolumeTaskRequest struct {
    QueryParams PostCreateReplaceRootVolumeTaskQueryParams 
    Headers PostCreateReplaceRootVolumeTaskHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateReplaceRootVolumeTaskResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

