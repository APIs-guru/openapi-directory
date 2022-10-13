package operations

type PostDescribeSpotFleetInstancesActionEnum string

const (
	PostDescribeSpotFleetInstancesActionEnumDescribeSpotFleetInstances PostDescribeSpotFleetInstancesActionEnum = "DescribeSpotFleetInstances"
)

type PostDescribeSpotFleetInstancesVersionEnum string

const (
	PostDescribeSpotFleetInstancesVersionEnumTwoThousandAndSixteen1115 PostDescribeSpotFleetInstancesVersionEnum = "2016-11-15"
)

type PostDescribeSpotFleetInstancesQueryParams struct {
	Action  PostDescribeSpotFleetInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeSpotFleetInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeSpotFleetInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeSpotFleetInstancesRequest struct {
	QueryParams PostDescribeSpotFleetInstancesQueryParams
	Headers     PostDescribeSpotFleetInstancesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeSpotFleetInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
