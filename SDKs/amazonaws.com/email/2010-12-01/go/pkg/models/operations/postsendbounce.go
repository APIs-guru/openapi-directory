package operations




type PostSendBounceActionEnum string

const (
    PostSendBounceActionEnumSendBounce PostSendBounceActionEnum = "SendBounce"
)



type PostSendBounceVersionEnum string

const (
    PostSendBounceVersionEnumTwoThousandAndTen1201 PostSendBounceVersionEnum = "2010-12-01"
)


type PostSendBounceQueryParams struct {
    Action PostSendBounceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostSendBounceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostSendBounceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostSendBounceRequest struct {
    QueryParams PostSendBounceQueryParams 
    Headers PostSendBounceHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostSendBounceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

