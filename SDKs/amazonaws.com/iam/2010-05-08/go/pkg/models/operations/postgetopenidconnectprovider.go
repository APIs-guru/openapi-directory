package operations




type PostGetOpenIDConnectProviderActionEnum string

const (
    PostGetOpenIDConnectProviderActionEnumGetOpenIDConnectProvider PostGetOpenIDConnectProviderActionEnum = "GetOpenIDConnectProvider"
)



type PostGetOpenIDConnectProviderVersionEnum string

const (
    PostGetOpenIDConnectProviderVersionEnumTwoThousandAndTen0508 PostGetOpenIDConnectProviderVersionEnum = "2010-05-08"
)


type PostGetOpenIDConnectProviderQueryParams struct {
    Action PostGetOpenIDConnectProviderActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostGetOpenIDConnectProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetOpenIDConnectProviderHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetOpenIDConnectProviderRequest struct {
    QueryParams PostGetOpenIDConnectProviderQueryParams 
    Headers PostGetOpenIDConnectProviderHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetOpenIDConnectProviderResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

