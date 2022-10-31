package operations




type PostDeleteFleetsActionEnum string

const (
    PostDeleteFleetsActionEnumDeleteFleets PostDeleteFleetsActionEnum = "DeleteFleets"
)



type PostDeleteFleetsVersionEnum string

const (
    PostDeleteFleetsVersionEnumTwoThousandAndSixteen1115 PostDeleteFleetsVersionEnum = "2016-11-15"
)


type PostDeleteFleetsQueryParams struct {
    Action PostDeleteFleetsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteFleetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteFleetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteFleetsRequest struct {
    QueryParams PostDeleteFleetsQueryParams 
    Headers PostDeleteFleetsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteFleetsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

