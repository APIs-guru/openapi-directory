package operations

type PostDescribeSpotFleetRequestsActionEnum string

const (
	PostDescribeSpotFleetRequestsActionEnumDescribeSpotFleetRequests PostDescribeSpotFleetRequestsActionEnum = "DescribeSpotFleetRequests"
)

type PostDescribeSpotFleetRequestsVersionEnum string

const (
	PostDescribeSpotFleetRequestsVersionEnumTwoThousandAndSixteen1115 PostDescribeSpotFleetRequestsVersionEnum = "2016-11-15"
)

type PostDescribeSpotFleetRequestsQueryParams struct {
	Action     PostDescribeSpotFleetRequestsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                  `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                  `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeSpotFleetRequestsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeSpotFleetRequestsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeSpotFleetRequestsRequest struct {
	QueryParams PostDescribeSpotFleetRequestsQueryParams
	Headers     PostDescribeSpotFleetRequestsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeSpotFleetRequestsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
