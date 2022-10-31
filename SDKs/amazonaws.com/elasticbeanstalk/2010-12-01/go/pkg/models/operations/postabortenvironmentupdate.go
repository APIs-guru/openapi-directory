package operations




type PostAbortEnvironmentUpdateActionEnum string

const (
    PostAbortEnvironmentUpdateActionEnumAbortEnvironmentUpdate PostAbortEnvironmentUpdateActionEnum = "AbortEnvironmentUpdate"
)



type PostAbortEnvironmentUpdateVersionEnum string

const (
    PostAbortEnvironmentUpdateVersionEnumTwoThousandAndTen1201 PostAbortEnvironmentUpdateVersionEnum = "2010-12-01"
)


type PostAbortEnvironmentUpdateQueryParams struct {
    Action PostAbortEnvironmentUpdateActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostAbortEnvironmentUpdateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostAbortEnvironmentUpdateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostAbortEnvironmentUpdateRequest struct {
    QueryParams PostAbortEnvironmentUpdateQueryParams 
    Headers PostAbortEnvironmentUpdateHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostAbortEnvironmentUpdateResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

