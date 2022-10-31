package operations




type GetCreateReceiptRuleSetActionEnum string

const (
    GetCreateReceiptRuleSetActionEnumCreateReceiptRuleSet GetCreateReceiptRuleSetActionEnum = "CreateReceiptRuleSet"
)



type GetCreateReceiptRuleSetVersionEnum string

const (
    GetCreateReceiptRuleSetVersionEnumTwoThousandAndTen1201 GetCreateReceiptRuleSetVersionEnum = "2010-12-01"
)


type GetCreateReceiptRuleSetQueryParams struct {
    Action GetCreateReceiptRuleSetActionEnum `queryParam:"style=form,explode=true,name=Action"`
    RuleSetName string `queryParam:"style=form,explode=true,name=RuleSetName"`
    Version GetCreateReceiptRuleSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetCreateReceiptRuleSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCreateReceiptRuleSetRequest struct {
    QueryParams GetCreateReceiptRuleSetQueryParams 
    Headers GetCreateReceiptRuleSetHeaders 
    
}

type GetCreateReceiptRuleSetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

