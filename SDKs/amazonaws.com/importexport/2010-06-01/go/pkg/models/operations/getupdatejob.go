package operations




type GetUpdateJobActionEnum string

const (
    GetUpdateJobActionEnumUpdateJob GetUpdateJobActionEnum = "UpdateJob"
)



type GetUpdateJobJobTypeEnum string

const (
    GetUpdateJobJobTypeEnumImport GetUpdateJobJobTypeEnum = "Import"
GetUpdateJobJobTypeEnumExport GetUpdateJobJobTypeEnum = "Export"
)



type GetUpdateJobOperationEnum string

const (
    GetUpdateJobOperationEnumUpdateJob GetUpdateJobOperationEnum = "UpdateJob"
)



type GetUpdateJobVersionEnum string

const (
    GetUpdateJobVersionEnumTwoThousandAndTen0601 GetUpdateJobVersionEnum = "2010-06-01"
)


type GetUpdateJobQueryParams struct {
    APIVersion *string `queryParam:"style=form,explode=true,name=APIVersion"`
    AwsAccessKeyID string `queryParam:"style=form,explode=true,name=AWSAccessKeyId"`
    Action GetUpdateJobActionEnum `queryParam:"style=form,explode=true,name=Action"`
    JobID string `queryParam:"style=form,explode=true,name=JobId"`
    JobType GetUpdateJobJobTypeEnum `queryParam:"style=form,explode=true,name=JobType"`
    Manifest string `queryParam:"style=form,explode=true,name=Manifest"`
    Operation GetUpdateJobOperationEnum `queryParam:"style=form,explode=true,name=Operation"`
    Signature string `queryParam:"style=form,explode=true,name=Signature"`
    SignatureMethod string `queryParam:"style=form,explode=true,name=SignatureMethod"`
    SignatureVersion string `queryParam:"style=form,explode=true,name=SignatureVersion"`
    Timestamp string `queryParam:"style=form,explode=true,name=Timestamp"`
    ValidateOnly bool `queryParam:"style=form,explode=true,name=ValidateOnly"`
    Version GetUpdateJobVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetUpdateJobRequest struct {
    QueryParams GetUpdateJobQueryParams 
    
}

type GetUpdateJobResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

