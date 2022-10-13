package operations

type PostDescribeHostReservationsActionEnum string

const (
	PostDescribeHostReservationsActionEnumDescribeHostReservations PostDescribeHostReservationsActionEnum = "DescribeHostReservations"
)

type PostDescribeHostReservationsVersionEnum string

const (
	PostDescribeHostReservationsVersionEnumTwoThousandAndSixteen1115 PostDescribeHostReservationsVersionEnum = "2016-11-15"
)

type PostDescribeHostReservationsQueryParams struct {
	Action     PostDescribeHostReservationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                 `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                 `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeHostReservationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeHostReservationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeHostReservationsRequest struct {
	QueryParams PostDescribeHostReservationsQueryParams
	Headers     PostDescribeHostReservationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeHostReservationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
