package operations




type PostReorderReceiptRuleSetActionEnum string

const (
    PostReorderReceiptRuleSetActionEnumReorderReceiptRuleSet PostReorderReceiptRuleSetActionEnum = "ReorderReceiptRuleSet"
)



type PostReorderReceiptRuleSetVersionEnum string

const (
    PostReorderReceiptRuleSetVersionEnumTwoThousandAndTen1201 PostReorderReceiptRuleSetVersionEnum = "2010-12-01"
)


type PostReorderReceiptRuleSetQueryParams struct {
    Action PostReorderReceiptRuleSetActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostReorderReceiptRuleSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostReorderReceiptRuleSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostReorderReceiptRuleSetRequest struct {
    QueryParams PostReorderReceiptRuleSetQueryParams 
    Headers PostReorderReceiptRuleSetHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostReorderReceiptRuleSetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

