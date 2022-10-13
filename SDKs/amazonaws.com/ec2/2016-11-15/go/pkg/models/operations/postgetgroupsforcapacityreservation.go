package operations

type PostGetGroupsForCapacityReservationActionEnum string

const (
	PostGetGroupsForCapacityReservationActionEnumGetGroupsForCapacityReservation PostGetGroupsForCapacityReservationActionEnum = "GetGroupsForCapacityReservation"
)

type PostGetGroupsForCapacityReservationVersionEnum string

const (
	PostGetGroupsForCapacityReservationVersionEnumTwoThousandAndSixteen1115 PostGetGroupsForCapacityReservationVersionEnum = "2016-11-15"
)

type PostGetGroupsForCapacityReservationQueryParams struct {
	Action     PostGetGroupsForCapacityReservationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                        `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                        `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostGetGroupsForCapacityReservationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetGroupsForCapacityReservationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetGroupsForCapacityReservationRequest struct {
	QueryParams PostGetGroupsForCapacityReservationQueryParams
	Headers     PostGetGroupsForCapacityReservationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetGroupsForCapacityReservationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
