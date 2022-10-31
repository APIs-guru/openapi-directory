package operations

type PostModifyCapacityReservationActionEnum string

const (
	PostModifyCapacityReservationActionEnumModifyCapacityReservation PostModifyCapacityReservationActionEnum = "ModifyCapacityReservation"
)

type PostModifyCapacityReservationVersionEnum string

const (
	PostModifyCapacityReservationVersionEnumTwoThousandAndSixteen1115 PostModifyCapacityReservationVersionEnum = "2016-11-15"
)

type PostModifyCapacityReservationQueryParams struct {
	Action  PostModifyCapacityReservationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyCapacityReservationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyCapacityReservationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyCapacityReservationRequest struct {
	QueryParams PostModifyCapacityReservationQueryParams
	Headers     PostModifyCapacityReservationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyCapacityReservationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
