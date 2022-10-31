package operations




type GetDeleteReceiptRuleSetActionEnum string

const (
    GetDeleteReceiptRuleSetActionEnumDeleteReceiptRuleSet GetDeleteReceiptRuleSetActionEnum = "DeleteReceiptRuleSet"
)



type GetDeleteReceiptRuleSetVersionEnum string

const (
    GetDeleteReceiptRuleSetVersionEnumTwoThousandAndTen1201 GetDeleteReceiptRuleSetVersionEnum = "2010-12-01"
)


type GetDeleteReceiptRuleSetQueryParams struct {
    Action GetDeleteReceiptRuleSetActionEnum `queryParam:"style=form,explode=true,name=Action"`
    RuleSetName string `queryParam:"style=form,explode=true,name=RuleSetName"`
    Version GetDeleteReceiptRuleSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteReceiptRuleSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteReceiptRuleSetRequest struct {
    QueryParams GetDeleteReceiptRuleSetQueryParams 
    Headers GetDeleteReceiptRuleSetHeaders 
    
}

type GetDeleteReceiptRuleSetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

