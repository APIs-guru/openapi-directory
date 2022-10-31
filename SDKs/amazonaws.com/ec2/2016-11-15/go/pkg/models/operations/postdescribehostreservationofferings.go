package operations

type PostDescribeHostReservationOfferingsActionEnum string

const (
	PostDescribeHostReservationOfferingsActionEnumDescribeHostReservationOfferings PostDescribeHostReservationOfferingsActionEnum = "DescribeHostReservationOfferings"
)

type PostDescribeHostReservationOfferingsVersionEnum string

const (
	PostDescribeHostReservationOfferingsVersionEnumTwoThousandAndSixteen1115 PostDescribeHostReservationOfferingsVersionEnum = "2016-11-15"
)

type PostDescribeHostReservationOfferingsQueryParams struct {
	Action     PostDescribeHostReservationOfferingsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                         `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                         `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeHostReservationOfferingsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeHostReservationOfferingsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeHostReservationOfferingsRequest struct {
	QueryParams PostDescribeHostReservationOfferingsQueryParams
	Headers     PostDescribeHostReservationOfferingsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeHostReservationOfferingsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
