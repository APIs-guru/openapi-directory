package operations




type PostDeleteTrafficMirrorFilterRuleActionEnum string

const (
    PostDeleteTrafficMirrorFilterRuleActionEnumDeleteTrafficMirrorFilterRule PostDeleteTrafficMirrorFilterRuleActionEnum = "DeleteTrafficMirrorFilterRule"
)



type PostDeleteTrafficMirrorFilterRuleVersionEnum string

const (
    PostDeleteTrafficMirrorFilterRuleVersionEnumTwoThousandAndSixteen1115 PostDeleteTrafficMirrorFilterRuleVersionEnum = "2016-11-15"
)


type PostDeleteTrafficMirrorFilterRuleQueryParams struct {
    Action PostDeleteTrafficMirrorFilterRuleActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDeleteTrafficMirrorFilterRuleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDeleteTrafficMirrorFilterRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDeleteTrafficMirrorFilterRuleRequest struct {
    QueryParams PostDeleteTrafficMirrorFilterRuleQueryParams 
    Headers PostDeleteTrafficMirrorFilterRuleHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDeleteTrafficMirrorFilterRuleResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

