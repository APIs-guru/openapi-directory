package operations




type PostCreateOpenIDConnectProviderActionEnum string

const (
    PostCreateOpenIDConnectProviderActionEnumCreateOpenIDConnectProvider PostCreateOpenIDConnectProviderActionEnum = "CreateOpenIDConnectProvider"
)



type PostCreateOpenIDConnectProviderVersionEnum string

const (
    PostCreateOpenIDConnectProviderVersionEnumTwoThousandAndTen0508 PostCreateOpenIDConnectProviderVersionEnum = "2010-05-08"
)


type PostCreateOpenIDConnectProviderQueryParams struct {
    Action PostCreateOpenIDConnectProviderActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateOpenIDConnectProviderVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateOpenIDConnectProviderHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateOpenIDConnectProviderRequest struct {
    QueryParams PostCreateOpenIDConnectProviderQueryParams 
    Headers PostCreateOpenIDConnectProviderHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateOpenIDConnectProviderResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

