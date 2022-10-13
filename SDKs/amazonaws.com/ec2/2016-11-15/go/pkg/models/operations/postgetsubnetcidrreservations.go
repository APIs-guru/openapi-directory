package operations

type PostGetSubnetCidrReservationsActionEnum string

const (
	PostGetSubnetCidrReservationsActionEnumGetSubnetCidrReservations PostGetSubnetCidrReservationsActionEnum = "GetSubnetCidrReservations"
)

type PostGetSubnetCidrReservationsVersionEnum string

const (
	PostGetSubnetCidrReservationsVersionEnumTwoThousandAndSixteen1115 PostGetSubnetCidrReservationsVersionEnum = "2016-11-15"
)

type PostGetSubnetCidrReservationsQueryParams struct {
	Action  PostGetSubnetCidrReservationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetSubnetCidrReservationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetSubnetCidrReservationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetSubnetCidrReservationsRequest struct {
	QueryParams PostGetSubnetCidrReservationsQueryParams
	Headers     PostGetSubnetCidrReservationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetSubnetCidrReservationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
