package operations

import (
	"time"
)

type GetDescribeFleetHistoryActionEnum string

const (
	GetDescribeFleetHistoryActionEnumDescribeFleetHistory GetDescribeFleetHistoryActionEnum = "DescribeFleetHistory"
)

type GetDescribeFleetHistoryEventTypeEnum string

const (
	GetDescribeFleetHistoryEventTypeEnumInstanceChange GetDescribeFleetHistoryEventTypeEnum = "instance-change"
	GetDescribeFleetHistoryEventTypeEnumFleetChange    GetDescribeFleetHistoryEventTypeEnum = "fleet-change"
	GetDescribeFleetHistoryEventTypeEnumServiceError   GetDescribeFleetHistoryEventTypeEnum = "service-error"
)

type GetDescribeFleetHistoryVersionEnum string

const (
	GetDescribeFleetHistoryVersionEnumTwoThousandAndSixteen1115 GetDescribeFleetHistoryVersionEnum = "2016-11-15"
)

type GetDescribeFleetHistoryQueryParams struct {
	Action     GetDescribeFleetHistoryActionEnum     `queryParam:"style=form,explode=true,name=Action"`
	DryRun     *bool                                 `queryParam:"style=form,explode=true,name=DryRun"`
	EventType  *GetDescribeFleetHistoryEventTypeEnum `queryParam:"style=form,explode=true,name=EventType"`
	FleetID    string                                `queryParam:"style=form,explode=true,name=FleetId"`
	MaxResults *int64                                `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                               `queryParam:"style=form,explode=true,name=NextToken"`
	StartTime  time.Time                             `queryParam:"style=form,explode=true,name=StartTime"`
	Version    GetDescribeFleetHistoryVersionEnum    `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeFleetHistoryHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeFleetHistoryRequest struct {
	QueryParams GetDescribeFleetHistoryQueryParams
	Headers     GetDescribeFleetHistoryHeaders
}

type GetDescribeFleetHistoryResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
