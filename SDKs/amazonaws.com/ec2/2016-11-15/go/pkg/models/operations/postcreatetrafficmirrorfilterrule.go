package operations




type PostCreateTrafficMirrorFilterRuleActionEnum string

const (
    PostCreateTrafficMirrorFilterRuleActionEnumCreateTrafficMirrorFilterRule PostCreateTrafficMirrorFilterRuleActionEnum = "CreateTrafficMirrorFilterRule"
)



type PostCreateTrafficMirrorFilterRuleVersionEnum string

const (
    PostCreateTrafficMirrorFilterRuleVersionEnumTwoThousandAndSixteen1115 PostCreateTrafficMirrorFilterRuleVersionEnum = "2016-11-15"
)


type PostCreateTrafficMirrorFilterRuleQueryParams struct {
    Action PostCreateTrafficMirrorFilterRuleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostCreateTrafficMirrorFilterRuleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostCreateTrafficMirrorFilterRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostCreateTrafficMirrorFilterRuleRequest struct {
    QueryParams PostCreateTrafficMirrorFilterRuleQueryParams 
    Headers PostCreateTrafficMirrorFilterRuleHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostCreateTrafficMirrorFilterRuleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

