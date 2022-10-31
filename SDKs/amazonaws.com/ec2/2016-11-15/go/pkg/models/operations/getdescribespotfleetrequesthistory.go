package operations

import (
	"time"
)

type GetDescribeSpotFleetRequestHistoryActionEnum string

const (
	GetDescribeSpotFleetRequestHistoryActionEnumDescribeSpotFleetRequestHistory GetDescribeSpotFleetRequestHistoryActionEnum = "DescribeSpotFleetRequestHistory"
)

type GetDescribeSpotFleetRequestHistoryEventTypeEnum string

const (
	GetDescribeSpotFleetRequestHistoryEventTypeEnumInstanceChange     GetDescribeSpotFleetRequestHistoryEventTypeEnum = "instanceChange"
	GetDescribeSpotFleetRequestHistoryEventTypeEnumFleetRequestChange GetDescribeSpotFleetRequestHistoryEventTypeEnum = "fleetRequestChange"
	GetDescribeSpotFleetRequestHistoryEventTypeEnumError              GetDescribeSpotFleetRequestHistoryEventTypeEnum = "error"
	GetDescribeSpotFleetRequestHistoryEventTypeEnumInformation        GetDescribeSpotFleetRequestHistoryEventTypeEnum = "information"
)

type GetDescribeSpotFleetRequestHistoryVersionEnum string

const (
	GetDescribeSpotFleetRequestHistoryVersionEnumTwoThousandAndSixteen1115 GetDescribeSpotFleetRequestHistoryVersionEnum = "2016-11-15"
)

type GetDescribeSpotFleetRequestHistoryQueryParams struct {
	Action             GetDescribeSpotFleetRequestHistoryActionEnum     `queryParam:"style=form,explode=true,name=Action"`
	DryRun             *bool                                            `queryParam:"style=form,explode=true,name=DryRun"`
	EventType          *GetDescribeSpotFleetRequestHistoryEventTypeEnum `queryParam:"style=form,explode=true,name=EventType"`
	MaxResults         *int64                                           `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken          *string                                          `queryParam:"style=form,explode=true,name=NextToken"`
	SpotFleetRequestID string                                           `queryParam:"style=form,explode=true,name=SpotFleetRequestId"`
	StartTime          time.Time                                        `queryParam:"style=form,explode=true,name=StartTime"`
	Version            GetDescribeSpotFleetRequestHistoryVersionEnum    `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeSpotFleetRequestHistoryHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeSpotFleetRequestHistoryRequest struct {
	QueryParams GetDescribeSpotFleetRequestHistoryQueryParams
	Headers     GetDescribeSpotFleetRequestHistoryHeaders
}

type GetDescribeSpotFleetRequestHistoryResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
