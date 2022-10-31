package operations




type PostCancelExportTaskActionEnum string

const (
    PostCancelExportTaskActionEnumCancelExportTask PostCancelExportTaskActionEnum = "CancelExportTask"
)



type PostCancelExportTaskVersionEnum string

const (
    PostCancelExportTaskVersionEnumTwoThousandAndSixteen1115 PostCancelExportTaskVersionEnum = "2016-11-15"
)


type PostCancelExportTaskQueryParams struct {
    Action PostCancelExportTaskActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCancelExportTaskVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCancelExportTaskHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCancelExportTaskRequest struct {
    QueryParams PostCancelExportTaskQueryParams 
    Headers PostCancelExportTaskHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCancelExportTaskResponse struct {
    ContentType string 
    StatusCode int64 
    
}

