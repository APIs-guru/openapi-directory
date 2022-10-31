package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTableStatisticsQueryParams struct {
	Marker     *string `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
}

type DescribeTableStatisticsXAmzTargetEnum string

const (
	DescribeTableStatisticsXAmzTargetEnumAmazonDmSv20160101DescribeTableStatistics DescribeTableStatisticsXAmzTargetEnum = "AmazonDMSv20160101.DescribeTableStatistics"
)

type DescribeTableStatisticsHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTableStatisticsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeTableStatisticsRequest struct {
	QueryParams DescribeTableStatisticsQueryParams
	Headers     DescribeTableStatisticsHeaders
	Request     shared.DescribeTableStatisticsMessage `request:"mediaType=application/json"`
}

type DescribeTableStatisticsResponse struct {
	ContentType                     string
	DescribeTableStatisticsResponse *shared.DescribeTableStatisticsResponse
	InvalidResourceStateFault       *interface{}
	ResourceNotFoundFault           *interface{}
	StatusCode                      int64
}
