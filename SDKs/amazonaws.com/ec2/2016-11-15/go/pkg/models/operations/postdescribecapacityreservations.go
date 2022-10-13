package operations

type PostDescribeCapacityReservationsActionEnum string

const (
	PostDescribeCapacityReservationsActionEnumDescribeCapacityReservations PostDescribeCapacityReservationsActionEnum = "DescribeCapacityReservations"
)

type PostDescribeCapacityReservationsVersionEnum string

const (
	PostDescribeCapacityReservationsVersionEnumTwoThousandAndSixteen1115 PostDescribeCapacityReservationsVersionEnum = "2016-11-15"
)

type PostDescribeCapacityReservationsQueryParams struct {
	Action     PostDescribeCapacityReservationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                     `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                     `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeCapacityReservationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeCapacityReservationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeCapacityReservationsRequest struct {
	QueryParams PostDescribeCapacityReservationsQueryParams
	Headers     PostDescribeCapacityReservationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeCapacityReservationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
