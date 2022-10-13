package operations

type PostCreateCapacityReservationActionEnum string

const (
	PostCreateCapacityReservationActionEnumCreateCapacityReservation PostCreateCapacityReservationActionEnum = "CreateCapacityReservation"
)

type PostCreateCapacityReservationVersionEnum string

const (
	PostCreateCapacityReservationVersionEnumTwoThousandAndSixteen1115 PostCreateCapacityReservationVersionEnum = "2016-11-15"
)

type PostCreateCapacityReservationQueryParams struct {
	Action  PostCreateCapacityReservationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateCapacityReservationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateCapacityReservationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateCapacityReservationRequest struct {
	QueryParams PostCreateCapacityReservationQueryParams
	Headers     PostCreateCapacityReservationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateCapacityReservationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
