package operations




type PostSetSubnetsActionEnum string

const (
    PostSetSubnetsActionEnumSetSubnets PostSetSubnetsActionEnum = "SetSubnets"
)



type PostSetSubnetsVersionEnum string

const (
    PostSetSubnetsVersionEnumTwoThousandAndFifteen1201 PostSetSubnetsVersionEnum = "2015-12-01"
)


type PostSetSubnetsQueryParams struct {
    Action PostSetSubnetsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostSetSubnetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostSetSubnetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostSetSubnetsRequest struct {
    QueryParams PostSetSubnetsQueryParams 
    Headers PostSetSubnetsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostSetSubnetsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

