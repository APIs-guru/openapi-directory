package operations

type PostDescribeClientVpnTargetNetworksActionEnum string

const (
	PostDescribeClientVpnTargetNetworksActionEnumDescribeClientVpnTargetNetworks PostDescribeClientVpnTargetNetworksActionEnum = "DescribeClientVpnTargetNetworks"
)

type PostDescribeClientVpnTargetNetworksVersionEnum string

const (
	PostDescribeClientVpnTargetNetworksVersionEnumTwoThousandAndSixteen1115 PostDescribeClientVpnTargetNetworksVersionEnum = "2016-11-15"
)

type PostDescribeClientVpnTargetNetworksQueryParams struct {
	Action     PostDescribeClientVpnTargetNetworksActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                        `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                        `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeClientVpnTargetNetworksVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeClientVpnTargetNetworksHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeClientVpnTargetNetworksRequest struct {
	QueryParams PostDescribeClientVpnTargetNetworksQueryParams
	Headers     PostDescribeClientVpnTargetNetworksHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeClientVpnTargetNetworksResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
