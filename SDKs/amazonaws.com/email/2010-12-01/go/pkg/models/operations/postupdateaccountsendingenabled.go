package operations




type PostUpdateAccountSendingEnabledActionEnum string

const (
    PostUpdateAccountSendingEnabledActionEnumUpdateAccountSendingEnabled PostUpdateAccountSendingEnabledActionEnum = "UpdateAccountSendingEnabled"
)



type PostUpdateAccountSendingEnabledVersionEnum string

const (
    PostUpdateAccountSendingEnabledVersionEnumTwoThousandAndTen1201 PostUpdateAccountSendingEnabledVersionEnum = "2010-12-01"
)


type PostUpdateAccountSendingEnabledQueryParams struct {
    Action PostUpdateAccountSendingEnabledActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostUpdateAccountSendingEnabledVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostUpdateAccountSendingEnabledHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostUpdateAccountSendingEnabledRequest struct {
    QueryParams PostUpdateAccountSendingEnabledQueryParams 
    Headers PostUpdateAccountSendingEnabledHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostUpdateAccountSendingEnabledResponse struct {
    ContentType string 
    StatusCode int64 
    
}

