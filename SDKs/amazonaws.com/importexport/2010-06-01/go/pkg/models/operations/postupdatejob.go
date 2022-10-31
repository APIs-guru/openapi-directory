package operations




type PostUpdateJobActionEnum string

const (
    PostUpdateJobActionEnumUpdateJob PostUpdateJobActionEnum = "UpdateJob"
)



type PostUpdateJobOperationEnum string

const (
    PostUpdateJobOperationEnumUpdateJob PostUpdateJobOperationEnum = "UpdateJob"
)



type PostUpdateJobVersionEnum string

const (
    PostUpdateJobVersionEnumTwoThousandAndTen0601 PostUpdateJobVersionEnum = "2010-06-01"
)


type PostUpdateJobQueryParams struct {
    AwsAccessKeyID string `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
    Action PostUpdateJobActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Operation PostUpdateJobOperationEnum `queryParam:"style=form,explode=true,name=Operation"`
    Signature string `queryParam:"style=form,explode=true,name=Signature"`
    SignatureMethod string `queryParam:"style=form,explode=true,name=SignatureMethod"`
    SignatureVersion string `queryParam:"style=form,explode=true,name=SignatureVersion"`
    Timestamp string `queryParam:"style=form,explode=true,name=Timestamp"`
    Version PostUpdateJobVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostUpdateJobRequest struct {
    QueryParams PostUpdateJobQueryParams 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostUpdateJobResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

