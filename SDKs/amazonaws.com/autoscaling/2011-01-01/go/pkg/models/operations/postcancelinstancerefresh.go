package operations




type PostCancelInstanceRefreshActionEnum string

const (
    PostCancelInstanceRefreshActionEnumCancelInstanceRefresh PostCancelInstanceRefreshActionEnum = "CancelInstanceRefresh"
)



type PostCancelInstanceRefreshVersionEnum string

const (
    PostCancelInstanceRefreshVersionEnumTwoThousandAndEleven0101 PostCancelInstanceRefreshVersionEnum = "2011-01-01"
)


type PostCancelInstanceRefreshQueryParams struct {
    Action PostCancelInstanceRefreshActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCancelInstanceRefreshVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCancelInstanceRefreshHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCancelInstanceRefreshRequest struct {
    QueryParams PostCancelInstanceRefreshQueryParams 
    Headers PostCancelInstanceRefreshHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCancelInstanceRefreshResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

