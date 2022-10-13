package operations

type PostDescribeSpotFleetRequestHistoryActionEnum string

const (
	PostDescribeSpotFleetRequestHistoryActionEnumDescribeSpotFleetRequestHistory PostDescribeSpotFleetRequestHistoryActionEnum = "DescribeSpotFleetRequestHistory"
)

type PostDescribeSpotFleetRequestHistoryVersionEnum string

const (
	PostDescribeSpotFleetRequestHistoryVersionEnumTwoThousandAndSixteen1115 PostDescribeSpotFleetRequestHistoryVersionEnum = "2016-11-15"
)

type PostDescribeSpotFleetRequestHistoryQueryParams struct {
	Action  PostDescribeSpotFleetRequestHistoryActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeSpotFleetRequestHistoryVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeSpotFleetRequestHistoryHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeSpotFleetRequestHistoryRequest struct {
	QueryParams PostDescribeSpotFleetRequestHistoryQueryParams
	Headers     PostDescribeSpotFleetRequestHistoryHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeSpotFleetRequestHistoryResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
