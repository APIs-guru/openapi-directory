package operations

type GetGetGroupsForCapacityReservationActionEnum string

const (
	GetGetGroupsForCapacityReservationActionEnumGetGroupsForCapacityReservation GetGetGroupsForCapacityReservationActionEnum = "GetGroupsForCapacityReservation"
)

type GetGetGroupsForCapacityReservationVersionEnum string

const (
	GetGetGroupsForCapacityReservationVersionEnumTwoThousandAndSixteen1115 GetGetGroupsForCapacityReservationVersionEnum = "2016-11-15"
)

type GetGetGroupsForCapacityReservationQueryParams struct {
	Action                GetGetGroupsForCapacityReservationActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	CapacityReservationID string                                        `queryParam:"style=form,explode=true,name=CapacityReservationId"`
	DryRun                *bool                                         `queryParam:"style=form,explode=true,name=DryRun"`
	MaxResults            *int64                                        `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken             *string                                       `queryParam:"style=form,explode=true,name=NextToken"`
	Version               GetGetGroupsForCapacityReservationVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetGroupsForCapacityReservationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetGetGroupsForCapacityReservationRequest struct {
	QueryParams GetGetGroupsForCapacityReservationQueryParams
	Headers     GetGetGroupsForCapacityReservationHeaders
}

type GetGetGroupsForCapacityReservationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
