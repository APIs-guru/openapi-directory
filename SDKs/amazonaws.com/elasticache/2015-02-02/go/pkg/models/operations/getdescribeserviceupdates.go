package operations

import (
	"openapi/pkg/models/shared"
)

type GetDescribeServiceUpdatesActionEnum string

const (
	GetDescribeServiceUpdatesActionEnumDescribeServiceUpdates GetDescribeServiceUpdatesActionEnum = "DescribeServiceUpdates"
)

type GetDescribeServiceUpdatesVersionEnum string

const (
	GetDescribeServiceUpdatesVersionEnumTwoThousandAndFifteen0202 GetDescribeServiceUpdatesVersionEnum = "2015-02-02"
)

type GetDescribeServiceUpdatesQueryParams struct {
	Action              GetDescribeServiceUpdatesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker              *string                              `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords          *int64                               `queryParam:"style=form,explode=true,name=MaxRecords"`
	ServiceUpdateName   *string                              `queryParam:"style=form,explode=true,name=ServiceUpdateName"`
	ServiceUpdateStatus []shared.ServiceUpdateStatusEnum     `queryParam:"style=form,explode=true,name=ServiceUpdateStatus"`
	Version             GetDescribeServiceUpdatesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeServiceUpdatesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeServiceUpdatesRequest struct {
	QueryParams GetDescribeServiceUpdatesQueryParams
	Headers     GetDescribeServiceUpdatesHeaders
}

type GetDescribeServiceUpdatesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
