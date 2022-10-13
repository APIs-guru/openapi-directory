package operations

type PostDescribeReservedInstancesListingsActionEnum string

const (
	PostDescribeReservedInstancesListingsActionEnumDescribeReservedInstancesListings PostDescribeReservedInstancesListingsActionEnum = "DescribeReservedInstancesListings"
)

type PostDescribeReservedInstancesListingsVersionEnum string

const (
	PostDescribeReservedInstancesListingsVersionEnumTwoThousandAndSixteen1115 PostDescribeReservedInstancesListingsVersionEnum = "2016-11-15"
)

type PostDescribeReservedInstancesListingsQueryParams struct {
	Action  PostDescribeReservedInstancesListingsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeReservedInstancesListingsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeReservedInstancesListingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeReservedInstancesListingsRequest struct {
	QueryParams PostDescribeReservedInstancesListingsQueryParams
	Headers     PostDescribeReservedInstancesListingsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeReservedInstancesListingsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
