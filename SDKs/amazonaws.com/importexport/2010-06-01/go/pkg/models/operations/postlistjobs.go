package operations




type PostListJobsActionEnum string

const (
    PostListJobsActionEnumListJobs PostListJobsActionEnum = "ListJobs"
)



type PostListJobsOperationEnum string

const (
    PostListJobsOperationEnumListJobs PostListJobsOperationEnum = "ListJobs"
)



type PostListJobsVersionEnum string

const (
    PostListJobsVersionEnumTwoThousandAndTen0601 PostListJobsVersionEnum = "2010-06-01"
)


type PostListJobsQueryParams struct {
    AwsAccessKeyID string `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
    Action PostListJobsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxJobs *string `queryParam:"style=form,explode=true,name=MaxJobs"`
    Operation PostListJobsOperationEnum `queryParam:"style=form,explode=true,name=Operation"`
    Signature string `queryParam:"style=form,explode=true,name=Signature"`
    SignatureMethod string `queryParam:"style=form,explode=true,name=SignatureMethod"`
    SignatureVersion string `queryParam:"style=form,explode=true,name=SignatureVersion"`
    Timestamp string `queryParam:"style=form,explode=true,name=Timestamp"`
    Version PostListJobsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostListJobsRequest struct {
    QueryParams PostListJobsQueryParams 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostListJobsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

