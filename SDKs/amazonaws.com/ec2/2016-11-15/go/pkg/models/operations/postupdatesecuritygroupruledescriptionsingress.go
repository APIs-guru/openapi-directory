package operations




type PostUpdateSecurityGroupRuleDescriptionsIngressActionEnum string

const (
    PostUpdateSecurityGroupRuleDescriptionsIngressActionEnumUpdateSecurityGroupRuleDescriptionsIngress PostUpdateSecurityGroupRuleDescriptionsIngressActionEnum = "UpdateSecurityGroupRuleDescriptionsIngress"
)



type PostUpdateSecurityGroupRuleDescriptionsIngressVersionEnum string

const (
    PostUpdateSecurityGroupRuleDescriptionsIngressVersionEnumTwoThousandAndSixteen1115 PostUpdateSecurityGroupRuleDescriptionsIngressVersionEnum = "2016-11-15"
)


type PostUpdateSecurityGroupRuleDescriptionsIngressQueryParams struct {
    Action PostUpdateSecurityGroupRuleDescriptionsIngressActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostUpdateSecurityGroupRuleDescriptionsIngressVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostUpdateSecurityGroupRuleDescriptionsIngressHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostUpdateSecurityGroupRuleDescriptionsIngressRequest struct {
    QueryParams PostUpdateSecurityGroupRuleDescriptionsIngressQueryParams 
    Headers PostUpdateSecurityGroupRuleDescriptionsIngressHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostUpdateSecurityGroupRuleDescriptionsIngressResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

