package operations




type GetRetrieveEnvironmentInfoActionEnum string

const (
    GetRetrieveEnvironmentInfoActionEnumRetrieveEnvironmentInfo GetRetrieveEnvironmentInfoActionEnum = "RetrieveEnvironmentInfo"
)



type GetRetrieveEnvironmentInfoInfoTypeEnum string

const (
    GetRetrieveEnvironmentInfoInfoTypeEnumTail GetRetrieveEnvironmentInfoInfoTypeEnum = "tail"
GetRetrieveEnvironmentInfoInfoTypeEnumBundle GetRetrieveEnvironmentInfoInfoTypeEnum = "bundle"
)



type GetRetrieveEnvironmentInfoVersionEnum string

const (
    GetRetrieveEnvironmentInfoVersionEnumTwoThousandAndTen1201 GetRetrieveEnvironmentInfoVersionEnum = "2010-12-01"
)


type GetRetrieveEnvironmentInfoQueryParams struct {
    Action GetRetrieveEnvironmentInfoActionEnum `queryParam:"style=form,explode=true,name=Action"`
    EnvironmentID *string `queryParam:"style=form,explode=true,name=EnvironmentId"`
    EnvironmentName *string `queryParam:"style=form,explode=true,name=EnvironmentName"`
    InfoType GetRetrieveEnvironmentInfoInfoTypeEnum `queryParam:"style=form,explode=true,name=InfoType"`
    Version GetRetrieveEnvironmentInfoVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetRetrieveEnvironmentInfoHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRetrieveEnvironmentInfoRequest struct {
    QueryParams GetRetrieveEnvironmentInfoQueryParams 
    Headers GetRetrieveEnvironmentInfoHeaders 
    
}

type GetRetrieveEnvironmentInfoResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

