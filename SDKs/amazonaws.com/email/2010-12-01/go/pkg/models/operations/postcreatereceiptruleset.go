package operations




type PostCreateReceiptRuleSetActionEnum string

const (
    PostCreateReceiptRuleSetActionEnumCreateReceiptRuleSet PostCreateReceiptRuleSetActionEnum = "CreateReceiptRuleSet"
)



type PostCreateReceiptRuleSetVersionEnum string

const (
    PostCreateReceiptRuleSetVersionEnumTwoThousandAndTen1201 PostCreateReceiptRuleSetVersionEnum = "2010-12-01"
)


type PostCreateReceiptRuleSetQueryParams struct {
    Action PostCreateReceiptRuleSetActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateReceiptRuleSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateReceiptRuleSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateReceiptRuleSetRequest struct {
    QueryParams PostCreateReceiptRuleSetQueryParams 
    Headers PostCreateReceiptRuleSetHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateReceiptRuleSetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

