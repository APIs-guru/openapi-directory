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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
