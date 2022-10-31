package operations




type PostBatchDeleteScheduledActionActionEnum string

const (
    PostBatchDeleteScheduledActionActionEnumBatchDeleteScheduledAction PostBatchDeleteScheduledActionActionEnum = "BatchDeleteScheduledAction"
)



type PostBatchDeleteScheduledActionVersionEnum string

const (
    PostBatchDeleteScheduledActionVersionEnumTwoThousandAndEleven0101 PostBatchDeleteScheduledActionVersionEnum = "2011-01-01"
)


type PostBatchDeleteScheduledActionQueryParams struct {
    Action PostBatchDeleteScheduledActionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostBatchDeleteScheduledActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostBatchDeleteScheduledActionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostBatchDeleteScheduledActionRequest struct {
    QueryParams PostBatchDeleteScheduledActionQueryParams 
    Headers PostBatchDeleteScheduledActionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostBatchDeleteScheduledActionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

