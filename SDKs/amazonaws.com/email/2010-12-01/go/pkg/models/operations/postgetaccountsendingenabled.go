package operations




type PostGetAccountSendingEnabledActionEnum string

const (
    PostGetAccountSendingEnabledActionEnumGetAccountSendingEnabled PostGetAccountSendingEnabledActionEnum = "GetAccountSendingEnabled"
)



type PostGetAccountSendingEnabledVersionEnum string

const (
    PostGetAccountSendingEnabledVersionEnumTwoThousandAndTen1201 PostGetAccountSendingEnabledVersionEnum = "2010-12-01"
)


type PostGetAccountSendingEnabledQueryParams struct {
    Action PostGetAccountSendingEnabledActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostGetAccountSendingEnabledVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetAccountSendingEnabledHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetAccountSendingEnabledRequest struct {
    QueryParams PostGetAccountSendingEnabledQueryParams 
    Headers PostGetAccountSendingEnabledHeaders 
    
}

type PostGetAccountSendingEnabledResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

