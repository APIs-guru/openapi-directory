package operations




type PostListReceiptRuleSetsActionEnum string

const (
    PostListReceiptRuleSetsActionEnumListReceiptRuleSets PostListReceiptRuleSetsActionEnum = "ListReceiptRuleSets"
)



type PostListReceiptRuleSetsVersionEnum string

const (
    PostListReceiptRuleSetsVersionEnumTwoThousandAndTen1201 PostListReceiptRuleSetsVersionEnum = "2010-12-01"
)


type PostListReceiptRuleSetsQueryParams struct {
    Action PostListReceiptRuleSetsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostListReceiptRuleSetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostListReceiptRuleSetsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostListReceiptRuleSetsRequest struct {
    QueryParams PostListReceiptRuleSetsQueryParams 
    Headers PostListReceiptRuleSetsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostListReceiptRuleSetsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

