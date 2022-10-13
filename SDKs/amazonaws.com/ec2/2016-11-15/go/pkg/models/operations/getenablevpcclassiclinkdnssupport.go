package operations

type GetEnableVpcClassicLinkDNSSupportActionEnum string

const (
	GetEnableVpcClassicLinkDNSSupportActionEnumEnableVpcClassicLinkDNSSupport GetEnableVpcClassicLinkDNSSupportActionEnum = "EnableVpcClassicLinkDnsSupport"
)

type GetEnableVpcClassicLinkDNSSupportVersionEnum string

const (
	GetEnableVpcClassicLinkDNSSupportVersionEnumTwoThousandAndSixteen1115 GetEnableVpcClassicLinkDNSSupportVersionEnum = "2016-11-15"
)

type GetEnableVpcClassicLinkDNSSupportQueryParams struct {
	Action  GetEnableVpcClassicLinkDNSSupportActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetEnableVpcClassicLinkDNSSupportVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcID   *string                                      `queryParam:"style=form,explode=true,name=VpcId"`
}

type GetEnableVpcClassicLinkDNSSupportHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEnableVpcClassicLinkDNSSupportRequest struct {
	QueryParams GetEnableVpcClassicLinkDNSSupportQueryParams
	Headers     GetEnableVpcClassicLinkDNSSupportHeaders
}

type GetEnableVpcClassicLinkDNSSupportResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
