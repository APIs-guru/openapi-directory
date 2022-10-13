package operations

type GetDisableVpcClassicLinkDNSSupportActionEnum string

const (
	GetDisableVpcClassicLinkDNSSupportActionEnumDisableVpcClassicLinkDNSSupport GetDisableVpcClassicLinkDNSSupportActionEnum = "DisableVpcClassicLinkDnsSupport"
)

type GetDisableVpcClassicLinkDNSSupportVersionEnum string

const (
	GetDisableVpcClassicLinkDNSSupportVersionEnumTwoThousandAndSixteen1115 GetDisableVpcClassicLinkDNSSupportVersionEnum = "2016-11-15"
)

type GetDisableVpcClassicLinkDNSSupportQueryParams struct {
	Action  GetDisableVpcClassicLinkDNSSupportActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetDisableVpcClassicLinkDNSSupportVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcID   *string                                       `queryParam:"style=form,explode=true,name=VpcId"`
}

type GetDisableVpcClassicLinkDNSSupportHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDisableVpcClassicLinkDNSSupportRequest struct {
	QueryParams GetDisableVpcClassicLinkDNSSupportQueryParams
	Headers     GetDisableVpcClassicLinkDNSSupportHeaders
}

type GetDisableVpcClassicLinkDNSSupportResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
