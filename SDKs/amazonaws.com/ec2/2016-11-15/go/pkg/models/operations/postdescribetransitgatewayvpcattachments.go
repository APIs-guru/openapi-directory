package operations

type PostDescribeTransitGatewayVpcAttachmentsActionEnum string

const (
	PostDescribeTransitGatewayVpcAttachmentsActionEnumDescribeTransitGatewayVpcAttachments PostDescribeTransitGatewayVpcAttachmentsActionEnum = "DescribeTransitGatewayVpcAttachments"
)

type PostDescribeTransitGatewayVpcAttachmentsVersionEnum string

const (
	PostDescribeTransitGatewayVpcAttachmentsVersionEnumTwoThousandAndSixteen1115 PostDescribeTransitGatewayVpcAttachmentsVersionEnum = "2016-11-15"
)

type PostDescribeTransitGatewayVpcAttachmentsQueryParams struct {
	Action     PostDescribeTransitGatewayVpcAttachmentsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                             `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                             `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeTransitGatewayVpcAttachmentsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeTransitGatewayVpcAttachmentsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeTransitGatewayVpcAttachmentsRequest struct {
	QueryParams PostDescribeTransitGatewayVpcAttachmentsQueryParams
	Headers     PostDescribeTransitGatewayVpcAttachmentsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeTransitGatewayVpcAttachmentsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
