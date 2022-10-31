package operations




type PostDescribeRulesActionEnum string

const (
    PostDescribeRulesActionEnumDescribeRules PostDescribeRulesActionEnum = "DescribeRules"
)



type PostDescribeRulesVersionEnum string

const (
    PostDescribeRulesVersionEnumTwoThousandAndFifteen1201 PostDescribeRulesVersionEnum = "2015-12-01"
)


type PostDescribeRulesQueryParams struct {
    Action PostDescribeRulesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDescribeRulesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeRulesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeRulesRequest struct {
    QueryParams PostDescribeRulesQueryParams 
    Headers PostDescribeRulesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeRulesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

