package operations




type PostModifyRuleActionEnum string

const (
    PostModifyRuleActionEnumModifyRule PostModifyRuleActionEnum = "ModifyRule"
)



type PostModifyRuleVersionEnum string

const (
    PostModifyRuleVersionEnumTwoThousandAndFifteen1201 PostModifyRuleVersionEnum = "2015-12-01"
)


type PostModifyRuleQueryParams struct {
    Action PostModifyRuleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifyRuleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifyRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifyRuleRequest struct {
    QueryParams PostModifyRuleQueryParams 
    Headers PostModifyRuleHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifyRuleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

