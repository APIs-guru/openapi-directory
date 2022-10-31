package operations




type PostEnableVpcClassicLinkDNSSupportActionEnum string

const (
    PostEnableVpcClassicLinkDNSSupportActionEnumEnableVpcClassicLinkDNSSupport PostEnableVpcClassicLinkDNSSupportActionEnum = "EnableVpcClassicLinkDnsSupport"
)



type PostEnableVpcClassicLinkDNSSupportVersionEnum string

const (
    PostEnableVpcClassicLinkDNSSupportVersionEnumTwoThousandAndSixteen1115 PostEnableVpcClassicLinkDNSSupportVersionEnum = "2016-11-15"
)


type PostEnableVpcClassicLinkDNSSupportQueryParams struct {
    Action PostEnableVpcClassicLinkDNSSupportActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostEnableVpcClassicLinkDNSSupportVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostEnableVpcClassicLinkDNSSupportHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostEnableVpcClassicLinkDNSSupportRequest struct {
    QueryParams PostEnableVpcClassicLinkDNSSupportQueryParams 
    Headers PostEnableVpcClassicLinkDNSSupportHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostEnableVpcClassicLinkDNSSupportResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

