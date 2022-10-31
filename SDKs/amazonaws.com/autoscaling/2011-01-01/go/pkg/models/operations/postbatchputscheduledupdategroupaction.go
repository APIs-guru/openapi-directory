package operations




type PostBatchPutScheduledUpdateGroupActionActionEnum string

const (
    PostBatchPutScheduledUpdateGroupActionActionEnumBatchPutScheduledUpdateGroupAction PostBatchPutScheduledUpdateGroupActionActionEnum = "BatchPutScheduledUpdateGroupAction"
)



type PostBatchPutScheduledUpdateGroupActionVersionEnum string

const (
    PostBatchPutScheduledUpdateGroupActionVersionEnumTwoThousandAndEleven0101 PostBatchPutScheduledUpdateGroupActionVersionEnum = "2011-01-01"
)


type PostBatchPutScheduledUpdateGroupActionQueryParams struct {
    Action PostBatchPutScheduledUpdateGroupActionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostBatchPutScheduledUpdateGroupActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostBatchPutScheduledUpdateGroupActionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostBatchPutScheduledUpdateGroupActionRequest struct {
    QueryParams PostBatchPutScheduledUpdateGroupActionQueryParams 
    Headers PostBatchPutScheduledUpdateGroupActionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostBatchPutScheduledUpdateGroupActionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

