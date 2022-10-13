package operations

type PostDeleteSubnetCidrReservationActionEnum string

const (
	PostDeleteSubnetCidrReservationActionEnumDeleteSubnetCidrReservation PostDeleteSubnetCidrReservationActionEnum = "DeleteSubnetCidrReservation"
)

type PostDeleteSubnetCidrReservationVersionEnum string

const (
	PostDeleteSubnetCidrReservationVersionEnumTwoThousandAndSixteen1115 PostDeleteSubnetCidrReservationVersionEnum = "2016-11-15"
)

type PostDeleteSubnetCidrReservationQueryParams struct {
	Action  PostDeleteSubnetCidrReservationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteSubnetCidrReservationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteSubnetCidrReservationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteSubnetCidrReservationRequest struct {
	QueryParams PostDeleteSubnetCidrReservationQueryParams
	Headers     PostDeleteSubnetCidrReservationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteSubnetCidrReservationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
