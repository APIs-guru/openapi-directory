package operations

type PostCreateSubnetCidrReservationActionEnum string

const (
	PostCreateSubnetCidrReservationActionEnumCreateSubnetCidrReservation PostCreateSubnetCidrReservationActionEnum = "CreateSubnetCidrReservation"
)

type PostCreateSubnetCidrReservationVersionEnum string

const (
	PostCreateSubnetCidrReservationVersionEnumTwoThousandAndSixteen1115 PostCreateSubnetCidrReservationVersionEnum = "2016-11-15"
)

type PostCreateSubnetCidrReservationQueryParams struct {
	Action  PostCreateSubnetCidrReservationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateSubnetCidrReservationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateSubnetCidrReservationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateSubnetCidrReservationRequest struct {
	QueryParams PostCreateSubnetCidrReservationQueryParams
	Headers     PostCreateSubnetCidrReservationHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateSubnetCidrReservationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
