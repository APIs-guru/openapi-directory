package operations




type GetReorderReceiptRuleSetActionEnum string

const (
    GetReorderReceiptRuleSetActionEnumReorderReceiptRuleSet GetReorderReceiptRuleSetActionEnum = "ReorderReceiptRuleSet"
)



type GetReorderReceiptRuleSetVersionEnum string

const (
    GetReorderReceiptRuleSetVersionEnumTwoThousandAndTen1201 GetReorderReceiptRuleSetVersionEnum = "2010-12-01"
)


type GetReorderReceiptRuleSetQueryParams struct {
    Action GetReorderReceiptRuleSetActionEnum `queryParam:"style=form,explode=true,name=Action"`
    RuleNames []string `queryParam:"style=form,explode=true,name=RuleNames"`
    RuleSetName string `queryParam:"style=form,explode=true,name=RuleSetName"`
    Version GetReorderReceiptRuleSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetReorderReceiptRuleSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetReorderReceiptRuleSetRequest struct {
    QueryParams GetReorderReceiptRuleSetQueryParams 
    Headers GetReorderReceiptRuleSetHeaders 
    
}

type GetReorderReceiptRuleSetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

