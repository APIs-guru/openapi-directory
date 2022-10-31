package operations

import (
	"time"
)

type GetPutScheduledUpdateGroupActionActionEnum string

const (
	GetPutScheduledUpdateGroupActionActionEnumPutScheduledUpdateGroupAction GetPutScheduledUpdateGroupActionActionEnum = "PutScheduledUpdateGroupAction"
)

type GetPutScheduledUpdateGroupActionVersionEnum string

const (
	GetPutScheduledUpdateGroupActionVersionEnumTwoThousandAndEleven0101 GetPutScheduledUpdateGroupActionVersionEnum = "2011-01-01"
)

type GetPutScheduledUpdateGroupActionQueryParams struct {
	Action               GetPutScheduledUpdateGroupActionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName string                                      `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	DesiredCapacity      *int64                                      `queryParam:"style=form,explode=true,name=DesiredCapacity"`
	EndTime              *time.Time                                  `queryParam:"style=form,explode=true,name=EndTime"`
	MaxSize              *int64                                      `queryParam:"style=form,explode=true,name=MaxSize"`
	MinSize              *int64                                      `queryParam:"style=form,explode=true,name=MinSize"`
	Recurrence           *string                                     `queryParam:"style=form,explode=true,name=Recurrence"`
	ScheduledActionName  string                                      `queryParam:"style=form,explode=true,name=ScheduledActionName"`
	StartTime            *time.Time                                  `queryParam:"style=form,explode=true,name=StartTime"`
	Time                 *time.Time                                  `queryParam:"style=form,explode=true,name=Time"`
	TimeZone             *string                                     `queryParam:"style=form,explode=true,name=TimeZone"`
	Version              GetPutScheduledUpdateGroupActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetPutScheduledUpdateGroupActionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetPutScheduledUpdateGroupActionRequest struct {
	QueryParams GetPutScheduledUpdateGroupActionQueryParams
	Headers     GetPutScheduledUpdateGroupActionHeaders
}

type GetPutScheduledUpdateGroupActionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
