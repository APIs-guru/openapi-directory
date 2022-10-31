package operations




type PostModifySecurityGroupRulesActionEnum string

const (
    PostModifySecurityGroupRulesActionEnumModifySecurityGroupRules PostModifySecurityGroupRulesActionEnum = "ModifySecurityGroupRules"
)



type PostModifySecurityGroupRulesVersionEnum string

const (
    PostModifySecurityGroupRulesVersionEnumTwoThousandAndSixteen1115 PostModifySecurityGroupRulesVersionEnum = "2016-11-15"
)


type PostModifySecurityGroupRulesQueryParams struct {
    Action PostModifySecurityGroupRulesActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostModifySecurityGroupRulesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostModifySecurityGroupRulesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostModifySecurityGroupRulesRequest struct {
    QueryParams PostModifySecurityGroupRulesQueryParams 
    Headers PostModifySecurityGroupRulesHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostModifySecurityGroupRulesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

