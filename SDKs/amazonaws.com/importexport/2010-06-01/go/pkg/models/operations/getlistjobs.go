package operations




type GetListJobsActionEnum string

const (
    GetListJobsActionEnumListJobs GetListJobsActionEnum = "ListJobs"
)



type GetListJobsOperationEnum string

const (
    GetListJobsOperationEnumListJobs GetListJobsOperationEnum = "ListJobs"
)



type GetListJobsVersionEnum string

const (
    GetListJobsVersionEnumTwoThousandAndTen0601 GetListJobsVersionEnum = "2010-06-01"
)


type GetListJobsQueryParams struct {
    APIVersion *string `queryParam:"style=form,explode=true,name=APIVersion"`
    AwsAccessKeyID string `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
    Action GetListJobsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxJobs *int64 `queryParam:"style=form,explode=true,name=MaxJobs"`
    Operation GetListJobsOperationEnum `queryParam:"style=form,explode=true,name=Operation"`
    Signature string `queryParam:"style=form,explode=true,name=Signature"`
    SignatureMethod string `queryParam:"style=form,explode=true,name=SignatureMethod"`
    SignatureVersion string `queryParam:"style=form,explode=true,name=SignatureVersion"`
    Timestamp string `queryParam:"style=form,explode=true,name=Timestamp"`
    Version GetListJobsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetListJobsRequest struct {
    QueryParams GetListJobsQueryParams 
    
}

type GetListJobsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

