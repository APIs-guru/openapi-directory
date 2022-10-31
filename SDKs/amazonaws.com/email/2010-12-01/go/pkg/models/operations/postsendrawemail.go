package operations




type PostSendRawEmailActionEnum string

const (
    PostSendRawEmailActionEnumSendRawEmail PostSendRawEmailActionEnum = "SendRawEmail"
)



type PostSendRawEmailVersionEnum string

const (
    PostSendRawEmailVersionEnumTwoThousandAndTen1201 PostSendRawEmailVersionEnum = "2010-12-01"
)


type PostSendRawEmailQueryParams struct {
    Action PostSendRawEmailActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostSendRawEmailVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostSendRawEmailHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostSendRawEmailRequest struct {
    QueryParams PostSendRawEmailQueryParams 
    Headers PostSendRawEmailHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostSendRawEmailResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

