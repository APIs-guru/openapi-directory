package operations

type PostDescribeTransitGatewayPeeringAttachmentsActionEnum string

const (
	PostDescribeTransitGatewayPeeringAttachmentsActionEnumDescribeTransitGatewayPeeringAttachments PostDescribeTransitGatewayPeeringAttachmentsActionEnum = "DescribeTransitGatewayPeeringAttachments"
)

type PostDescribeTransitGatewayPeeringAttachmentsVersionEnum string

const (
	PostDescribeTransitGatewayPeeringAttachmentsVersionEnumTwoThousandAndSixteen1115 PostDescribeTransitGatewayPeeringAttachmentsVersionEnum = "2016-11-15"
)

type PostDescribeTransitGatewayPeeringAttachmentsQueryParams struct {
	Action     PostDescribeTransitGatewayPeeringAttachmentsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                                 `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                                 `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeTransitGatewayPeeringAttachmentsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeTransitGatewayPeeringAttachmentsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeTransitGatewayPeeringAttachmentsRequest struct {
	QueryParams PostDescribeTransitGatewayPeeringAttachmentsQueryParams
	Headers     PostDescribeTransitGatewayPeeringAttachmentsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeTransitGatewayPeeringAttachmentsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
