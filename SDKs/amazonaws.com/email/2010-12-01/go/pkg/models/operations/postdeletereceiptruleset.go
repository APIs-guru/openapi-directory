package operations




type PostDeleteReceiptRuleSetActionEnum string

const (
    PostDeleteReceiptRuleSetActionEnumDeleteReceiptRuleSet PostDeleteReceiptRuleSetActionEnum = "DeleteReceiptRuleSet"
)



type PostDeleteReceiptRuleSetVersionEnum string

const (
    PostDeleteReceiptRuleSetVersionEnumTwoThousandAndTen1201 PostDeleteReceiptRuleSetVersionEnum = "2010-12-01"
)


type PostDeleteReceiptRuleSetQueryParams struct {
    Action PostDeleteReceiptRuleSetActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteReceiptRuleSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteReceiptRuleSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteReceiptRuleSetRequest struct {
    QueryParams PostDeleteReceiptRuleSetQueryParams 
    Headers PostDeleteReceiptRuleSetHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteReceiptRuleSetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

