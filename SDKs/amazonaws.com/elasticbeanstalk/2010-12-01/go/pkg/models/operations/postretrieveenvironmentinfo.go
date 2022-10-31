package operations




type PostRetrieveEnvironmentInfoActionEnum string

const (
    PostRetrieveEnvironmentInfoActionEnumRetrieveEnvironmentInfo PostRetrieveEnvironmentInfoActionEnum = "RetrieveEnvironmentInfo"
)



type PostRetrieveEnvironmentInfoVersionEnum string

const (
    PostRetrieveEnvironmentInfoVersionEnumTwoThousandAndTen1201 PostRetrieveEnvironmentInfoVersionEnum = "2010-12-01"
)


type PostRetrieveEnvironmentInfoQueryParams struct {
    Action PostRetrieveEnvironmentInfoActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostRetrieveEnvironmentInfoVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostRetrieveEnvironmentInfoHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostRetrieveEnvironmentInfoRequest struct {
    QueryParams PostRetrieveEnvironmentInfoQueryParams 
    Headers PostRetrieveEnvironmentInfoHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostRetrieveEnvironmentInfoResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

