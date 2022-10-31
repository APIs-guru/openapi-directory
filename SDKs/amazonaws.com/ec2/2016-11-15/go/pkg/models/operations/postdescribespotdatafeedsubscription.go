package operations

type PostDescribeSpotDatafeedSubscriptionActionEnum string

const (
	PostDescribeSpotDatafeedSubscriptionActionEnumDescribeSpotDatafeedSubscription PostDescribeSpotDatafeedSubscriptionActionEnum = "DescribeSpotDatafeedSubscription"
)

type PostDescribeSpotDatafeedSubscriptionVersionEnum string

const (
	PostDescribeSpotDatafeedSubscriptionVersionEnumTwoThousandAndSixteen1115 PostDescribeSpotDatafeedSubscriptionVersionEnum = "2016-11-15"
)

type PostDescribeSpotDatafeedSubscriptionQueryParams struct {
	Action  PostDescribeSpotDatafeedSubscriptionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeSpotDatafeedSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeSpotDatafeedSubscriptionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeSpotDatafeedSubscriptionRequest struct {
	QueryParams PostDescribeSpotDatafeedSubscriptionQueryParams
	Headers     PostDescribeSpotDatafeedSubscriptionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeSpotDatafeedSubscriptionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
