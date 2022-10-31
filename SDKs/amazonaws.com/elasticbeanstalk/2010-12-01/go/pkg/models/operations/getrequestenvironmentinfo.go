package operations




type GetRequestEnvironmentInfoActionEnum string

const (
    GetRequestEnvironmentInfoActionEnumRequestEnvironmentInfo GetRequestEnvironmentInfoActionEnum = "RequestEnvironmentInfo"
)



type GetRequestEnvironmentInfoInfoTypeEnum string

const (
    GetRequestEnvironmentInfoInfoTypeEnumTail GetRequestEnvironmentInfoInfoTypeEnum = "tail"
GetRequestEnvironmentInfoInfoTypeEnumBundle GetRequestEnvironmentInfoInfoTypeEnum = "bundle"
)



type GetRequestEnvironmentInfoVersionEnum string

const (
    GetRequestEnvironmentInfoVersionEnumTwoThousandAndTen1201 GetRequestEnvironmentInfoVersionEnum = "2010-12-01"
)


type GetRequestEnvironmentInfoQueryParams struct {
    Action GetRequestEnvironmentInfoActionEnum `queryParam:"style=form,explode=true,name=Action"`
    EnvironmentID *string `queryParam:"style=form,explode=true,name=EnvironmentId"`
    EnvironmentName *string `queryParam:"style=form,explode=true,name=EnvironmentName"`
    InfoType GetRequestEnvironmentInfoInfoTypeEnum `queryParam:"style=form,explode=true,name=InfoType"`
    Version GetRequestEnvironmentInfoVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetRequestEnvironmentInfoHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRequestEnvironmentInfoRequest struct {
    QueryParams GetRequestEnvironmentInfoQueryParams 
    Headers GetRequestEnvironmentInfoHeaders 
    
}

type GetRequestEnvironmentInfoResponse struct {
    ContentType string 
    StatusCode int64 
    
}

