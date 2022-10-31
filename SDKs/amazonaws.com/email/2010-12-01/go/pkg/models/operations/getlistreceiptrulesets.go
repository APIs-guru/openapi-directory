package operations




type GetListReceiptRuleSetsActionEnum string

const (
    GetListReceiptRuleSetsActionEnumListReceiptRuleSets GetListReceiptRuleSetsActionEnum = "ListReceiptRuleSets"
)



type GetListReceiptRuleSetsVersionEnum string

const (
    GetListReceiptRuleSetsVersionEnumTwoThousandAndTen1201 GetListReceiptRuleSetsVersionEnum = "2010-12-01"
)


type GetListReceiptRuleSetsQueryParams struct {
    Action GetListReceiptRuleSetsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    Version GetListReceiptRuleSetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetListReceiptRuleSetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetListReceiptRuleSetsRequest struct {
    QueryParams GetListReceiptRuleSetsQueryParams 
    Headers GetListReceiptRuleSetsHeaders 
    
}

type GetListReceiptRuleSetsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

