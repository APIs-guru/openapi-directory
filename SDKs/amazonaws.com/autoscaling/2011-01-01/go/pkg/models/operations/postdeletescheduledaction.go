package operations




type PostDeleteScheduledActionActionEnum string

const (
    PostDeleteScheduledActionActionEnumDeleteScheduledAction PostDeleteScheduledActionActionEnum = "DeleteScheduledAction"
)



type PostDeleteScheduledActionVersionEnum string

const (
    PostDeleteScheduledActionVersionEnumTwoThousandAndEleven0101 PostDeleteScheduledActionVersionEnum = "2011-01-01"
)


type PostDeleteScheduledActionQueryParams struct {
    Action PostDeleteScheduledActionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteScheduledActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteScheduledActionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteScheduledActionRequest struct {
    QueryParams PostDeleteScheduledActionQueryParams 
    Headers PostDeleteScheduledActionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteScheduledActionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

