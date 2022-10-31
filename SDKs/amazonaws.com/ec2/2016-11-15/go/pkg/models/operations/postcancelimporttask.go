package operations




type PostCancelImportTaskActionEnum string

const (
    PostCancelImportTaskActionEnumCancelImportTask PostCancelImportTaskActionEnum = "CancelImportTask"
)



type PostCancelImportTaskVersionEnum string

const (
    PostCancelImportTaskVersionEnumTwoThousandAndSixteen1115 PostCancelImportTaskVersionEnum = "2016-11-15"
)


type PostCancelImportTaskQueryParams struct {
    Action PostCancelImportTaskActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCancelImportTaskVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCancelImportTaskHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCancelImportTaskRequest struct {
    QueryParams PostCancelImportTaskQueryParams 
    Headers PostCancelImportTaskHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCancelImportTaskResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

