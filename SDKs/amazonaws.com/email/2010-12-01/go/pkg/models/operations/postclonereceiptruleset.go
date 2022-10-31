package operations




type PostCloneReceiptRuleSetActionEnum string

const (
    PostCloneReceiptRuleSetActionEnumCloneReceiptRuleSet PostCloneReceiptRuleSetActionEnum = "CloneReceiptRuleSet"
)



type PostCloneReceiptRuleSetVersionEnum string

const (
    PostCloneReceiptRuleSetVersionEnumTwoThousandAndTen1201 PostCloneReceiptRuleSetVersionEnum = "2010-12-01"
)


type PostCloneReceiptRuleSetQueryParams struct {
    Action PostCloneReceiptRuleSetActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCloneReceiptRuleSetVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCloneReceiptRuleSetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCloneReceiptRuleSetRequest struct {
    QueryParams PostCloneReceiptRuleSetQueryParams 
    Headers PostCloneReceiptRuleSetHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCloneReceiptRuleSetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

