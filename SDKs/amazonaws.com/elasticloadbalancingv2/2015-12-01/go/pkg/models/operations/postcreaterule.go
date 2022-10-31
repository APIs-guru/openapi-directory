package operations




type PostCreateRuleActionEnum string

const (
    PostCreateRuleActionEnumCreateRule PostCreateRuleActionEnum = "CreateRule"
)



type PostCreateRuleVersionEnum string

const (
    PostCreateRuleVersionEnumTwoThousandAndFifteen1201 PostCreateRuleVersionEnum = "2015-12-01"
)


type PostCreateRuleQueryParams struct {
    Action PostCreateRuleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateRuleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateRuleRequest struct {
    QueryParams PostCreateRuleQueryParams 
    Headers PostCreateRuleHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateRuleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

