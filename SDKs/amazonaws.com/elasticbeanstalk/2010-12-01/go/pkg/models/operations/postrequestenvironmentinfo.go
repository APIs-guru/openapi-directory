package operations




type PostRequestEnvironmentInfoActionEnum string

const (
    PostRequestEnvironmentInfoActionEnumRequestEnvironmentInfo PostRequestEnvironmentInfoActionEnum = "RequestEnvironmentInfo"
)



type PostRequestEnvironmentInfoVersionEnum string

const (
    PostRequestEnvironmentInfoVersionEnumTwoThousandAndTen1201 PostRequestEnvironmentInfoVersionEnum = "2010-12-01"
)


type PostRequestEnvironmentInfoQueryParams struct {
    Action PostRequestEnvironmentInfoActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostRequestEnvironmentInfoVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostRequestEnvironmentInfoHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostRequestEnvironmentInfoRequest struct {
    QueryParams PostRequestEnvironmentInfoQueryParams 
    Headers PostRequestEnvironmentInfoHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostRequestEnvironmentInfoResponse struct {
    ContentType string 
    StatusCode int64 
    
}

