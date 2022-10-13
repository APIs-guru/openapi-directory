package operations

type PostDescribeReservedInstancesOfferingsActionEnum string

const (
	PostDescribeReservedInstancesOfferingsActionEnumDescribeReservedInstancesOfferings PostDescribeReservedInstancesOfferingsActionEnum = "DescribeReservedInstancesOfferings"
)

type PostDescribeReservedInstancesOfferingsVersionEnum string

const (
	PostDescribeReservedInstancesOfferingsVersionEnumTwoThousandAndSixteen1115 PostDescribeReservedInstancesOfferingsVersionEnum = "2016-11-15"
)

type PostDescribeReservedInstancesOfferingsQueryParams struct {
	Action     PostDescribeReservedInstancesOfferingsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                           `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                           `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeReservedInstancesOfferingsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeReservedInstancesOfferingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeReservedInstancesOfferingsRequest struct {
	QueryParams PostDescribeReservedInstancesOfferingsQueryParams
	Headers     PostDescribeReservedInstancesOfferingsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeReservedInstancesOfferingsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
