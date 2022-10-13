package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetDescribeUpdateActionsActionEnum string

const (
	GetDescribeUpdateActionsActionEnumDescribeUpdateActions GetDescribeUpdateActionsActionEnum = "DescribeUpdateActions"
)

type GetDescribeUpdateActionsServiceUpdateTimeRange struct {
	EndTime   *time.Time `queryParam:"name=EndTime"`
	StartTime *time.Time `queryParam:"name=StartTime"`
}

type GetDescribeUpdateActionsVersionEnum string

const (
	GetDescribeUpdateActionsVersionEnumTwoThousandAndFifteen0202 GetDescribeUpdateActionsVersionEnum = "2015-02-02"
)

type GetDescribeUpdateActionsQueryParams struct {
	Action                    GetDescribeUpdateActionsActionEnum              `queryParam:"style=form,explode=true,name=Action"`
	CacheClusterIds           []string                                        `queryParam:"style=form,explode=true,name=CacheClusterIds"`
	Engine                    *string                                         `queryParam:"style=form,explode=true,name=Engine"`
	Marker                    *string                                         `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords                *int64                                          `queryParam:"style=form,explode=true,name=MaxRecords"`
	ReplicationGroupIds       []string                                        `queryParam:"style=form,explode=true,name=ReplicationGroupIds"`
	ServiceUpdateName         *string                                         `queryParam:"style=form,explode=true,name=ServiceUpdateName"`
	ServiceUpdateStatus       []shared.ServiceUpdateStatusEnum                `queryParam:"style=form,explode=true,name=ServiceUpdateStatus"`
	ServiceUpdateTimeRange    *GetDescribeUpdateActionsServiceUpdateTimeRange `queryParam:"style=form,explode=true,name=ServiceUpdateTimeRange"`
	ShowNodeLevelUpdateStatus *bool                                           `queryParam:"style=form,explode=true,name=ShowNodeLevelUpdateStatus"`
	UpdateActionStatus        []shared.UpdateActionStatusEnum                 `queryParam:"style=form,explode=true,name=UpdateActionStatus"`
	Version                   GetDescribeUpdateActionsVersionEnum             `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeUpdateActionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeUpdateActionsRequest struct {
	QueryParams GetDescribeUpdateActionsQueryParams
	Headers     GetDescribeUpdateActionsHeaders
}

type GetDescribeUpdateActionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
