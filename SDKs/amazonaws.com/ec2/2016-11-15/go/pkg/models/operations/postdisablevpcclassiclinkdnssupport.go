package operations




type PostDisableVpcClassicLinkDNSSupportActionEnum string

const (
    PostDisableVpcClassicLinkDNSSupportActionEnumDisableVpcClassicLinkDNSSupport PostDisableVpcClassicLinkDNSSupportActionEnum = "DisableVpcClassicLinkDnsSupport"
)



type PostDisableVpcClassicLinkDNSSupportVersionEnum string

const (
    PostDisableVpcClassicLinkDNSSupportVersionEnumTwoThousandAndSixteen1115 PostDisableVpcClassicLinkDNSSupportVersionEnum = "2016-11-15"
)


type PostDisableVpcClassicLinkDNSSupportQueryParams struct {
    Action PostDisableVpcClassicLinkDNSSupportActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostDisableVpcClassicLinkDNSSupportVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDisableVpcClassicLinkDNSSupportHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDisableVpcClassicLinkDNSSupportRequest struct {
    QueryParams PostDisableVpcClassicLinkDNSSupportQueryParams 
    Headers PostDisableVpcClassicLinkDNSSupportHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDisableVpcClassicLinkDNSSupportResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

