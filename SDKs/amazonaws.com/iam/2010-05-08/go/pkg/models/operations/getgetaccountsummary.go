package operations




type GetGetAccountSummaryActionEnum string

const (
    GetGetAccountSummaryActionEnumGetAccountSummary GetGetAccountSummaryActionEnum = "GetAccountSummary"
)



type GetGetAccountSummaryVersionEnum string

const (
    GetGetAccountSummaryVersionEnumTwoThousandAndTen0508 GetGetAccountSummaryVersionEnum = "2010-05-08"
)


type GetGetAccountSummaryQueryParams struct {
    Action GetGetAccountSummaryActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version GetGetAccountSummaryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetGetAccountSummaryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetGetAccountSummaryRequest struct {
    QueryParams GetGetAccountSummaryQueryParams 
    Headers GetGetAccountSummaryHeaders 
    
}

type GetGetAccountSummaryResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

