package operations

type GetDeleteSubnetCidrReservationActionEnum string

const (
	GetDeleteSubnetCidrReservationActionEnumDeleteSubnetCidrReservation GetDeleteSubnetCidrReservationActionEnum = "DeleteSubnetCidrReservation"
)

type GetDeleteSubnetCidrReservationVersionEnum string

const (
	GetDeleteSubnetCidrReservationVersionEnumTwoThousandAndSixteen1115 GetDeleteSubnetCidrReservationVersionEnum = "2016-11-15"
)

type GetDeleteSubnetCidrReservationQueryParams struct {
	Action                  GetDeleteSubnetCidrReservationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                  *bool                                     `queryParam:"style=form,explode=true,name=DryRun"`
	SubnetCidrReservationID string                                    `queryParam:"style=form,explode=true,name=SubnetCidrReservationId"`
	Version                 GetDeleteSubnetCidrReservationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteSubnetCidrReservationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteSubnetCidrReservationRequest struct {
	QueryParams GetDeleteSubnetCidrReservationQueryParams
	Headers     GetDeleteSubnetCidrReservationHeaders
}

type GetDeleteSubnetCidrReservationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
