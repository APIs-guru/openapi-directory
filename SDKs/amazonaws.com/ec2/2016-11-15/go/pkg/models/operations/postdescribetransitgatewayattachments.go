package operations

type PostDescribeTransitGatewayAttachmentsActionEnum string

const (
	PostDescribeTransitGatewayAttachmentsActionEnumDescribeTransitGatewayAttachments PostDescribeTransitGatewayAttachmentsActionEnum = "DescribeTransitGatewayAttachments"
)

type PostDescribeTransitGatewayAttachmentsVersionEnum string

const (
	PostDescribeTransitGatewayAttachmentsVersionEnumTwoThousandAndSixteen1115 PostDescribeTransitGatewayAttachmentsVersionEnum = "2016-11-15"
)

type PostDescribeTransitGatewayAttachmentsQueryParams struct {
	Action     PostDescribeTransitGatewayAttachmentsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                          `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                          `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeTransitGatewayAttachmentsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeTransitGatewayAttachmentsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeTransitGatewayAttachmentsRequest struct {
	QueryParams PostDescribeTransitGatewayAttachmentsQueryParams
	Headers     PostDescribeTransitGatewayAttachmentsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeTransitGatewayAttachmentsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
