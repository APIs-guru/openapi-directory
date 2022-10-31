package operations




type GetUpdateAccountSendingEnabledActionEnum string

const (
    GetUpdateAccountSendingEnabledActionEnumUpdateAccountSendingEnabled GetUpdateAccountSendingEnabledActionEnum = "UpdateAccountSendingEnabled"
)



type GetUpdateAccountSendingEnabledVersionEnum string

const (
    GetUpdateAccountSendingEnabledVersionEnumTwoThousandAndTen1201 GetUpdateAccountSendingEnabledVersionEnum = "2010-12-01"
)


type GetUpdateAccountSendingEnabledQueryParams struct {
    Action GetUpdateAccountSendingEnabledActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Enabled *bool `queryParam:"style=form,explode=true,name=Enabled"`
    Version GetUpdateAccountSendingEnabledVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetUpdateAccountSendingEnabledHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetUpdateAccountSendingEnabledRequest struct {
    QueryParams GetUpdateAccountSendingEnabledQueryParams 
    Headers GetUpdateAccountSendingEnabledHeaders 
    
}

type GetUpdateAccountSendingEnabledResponse struct {
    ContentType string 
    StatusCode int64 
    
}

