package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetReportInstanceStatusActionEnum string

const (
	GetReportInstanceStatusActionEnumReportInstanceStatus GetReportInstanceStatusActionEnum = "ReportInstanceStatus"
)

type GetReportInstanceStatusStatusEnum string

const (
	GetReportInstanceStatusStatusEnumOk       GetReportInstanceStatusStatusEnum = "ok"
	GetReportInstanceStatusStatusEnumImpaired GetReportInstanceStatusStatusEnum = "impaired"
)

type GetReportInstanceStatusVersionEnum string

const (
	GetReportInstanceStatusVersionEnumTwoThousandAndSixteen1115 GetReportInstanceStatusVersionEnum = "2016-11-15"
)

type GetReportInstanceStatusQueryParams struct {
	Action      GetReportInstanceStatusActionEnum      `queryParam:"style=form,explode=true,name=Action"`
	Description *string                                `queryParam:"style=form,explode=true,name=Description"`
	DryRun      *bool                                  `queryParam:"style=form,explode=true,name=DryRun"`
	EndTime     *time.Time                             `queryParam:"style=form,explode=true,name=EndTime"`
	InstanceID  []string                               `queryParam:"style=form,explode=true,name=InstanceId"`
	ReasonCode  []shared.ReportInstanceReasonCodesEnum `queryParam:"style=form,explode=true,name=ReasonCode"`
	StartTime   *time.Time                             `queryParam:"style=form,explode=true,name=StartTime"`
	Status      GetReportInstanceStatusStatusEnum      `queryParam:"style=form,explode=true,name=Status"`
	Version     GetReportInstanceStatusVersionEnum     `queryParam:"style=form,explode=true,name=Version"`
}

type GetReportInstanceStatusHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetReportInstanceStatusRequest struct {
	QueryParams GetReportInstanceStatusQueryParams
	Headers     GetReportInstanceStatusHeaders
}

type GetReportInstanceStatusResponse struct {
	ContentType string
	StatusCode  int64
}
