package operations

import (
	"time"
)

type GetModifyCapacityReservationActionEnum string

const (
	GetModifyCapacityReservationActionEnumModifyCapacityReservation GetModifyCapacityReservationActionEnum = "ModifyCapacityReservation"
)

type GetModifyCapacityReservationEndDateTypeEnum string

const (
	GetModifyCapacityReservationEndDateTypeEnumUnlimited GetModifyCapacityReservationEndDateTypeEnum = "unlimited"
	GetModifyCapacityReservationEndDateTypeEnumLimited   GetModifyCapacityReservationEndDateTypeEnum = "limited"
)

type GetModifyCapacityReservationVersionEnum string

const (
	GetModifyCapacityReservationVersionEnumTwoThousandAndSixteen1115 GetModifyCapacityReservationVersionEnum = "2016-11-15"
)

type GetModifyCapacityReservationQueryParams struct {
	Accept                *bool                                        `queryParam:"style=form,explode=true,name=Accept"`
	Action                GetModifyCapacityReservationActionEnum       `queryParam:"style=form,explode=true,name=Action"`
	CapacityReservationID string                                       `queryParam:"style=form,explode=true,name=CapacityReservationId"`
	DryRun                *bool                                        `queryParam:"style=form,explode=true,name=DryRun"`
	EndDate               *time.Time                                   `queryParam:"style=form,explode=true,name=EndDate"`
	EndDateType           *GetModifyCapacityReservationEndDateTypeEnum `queryParam:"style=form,explode=true,name=EndDateType"`
	InstanceCount         *int64                                       `queryParam:"style=form,explode=true,name=InstanceCount"`
	Version               GetModifyCapacityReservationVersionEnum      `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyCapacityReservationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifyCapacityReservationRequest struct {
	QueryParams GetModifyCapacityReservationQueryParams
	Headers     GetModifyCapacityReservationHeaders
}

type GetModifyCapacityReservationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
