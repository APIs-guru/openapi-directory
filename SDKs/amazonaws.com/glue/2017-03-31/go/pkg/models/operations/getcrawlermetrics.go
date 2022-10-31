package operations

import (
	"openapi/pkg/models/shared"
)

type GetCrawlerMetricsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetCrawlerMetricsXAmzTargetEnum string

const (
	GetCrawlerMetricsXAmzTargetEnumAwsGlueGetCrawlerMetrics GetCrawlerMetricsXAmzTargetEnum = "AWSGlue.GetCrawlerMetrics"
)

type GetCrawlerMetricsHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCrawlerMetricsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetCrawlerMetricsRequest struct {
	QueryParams GetCrawlerMetricsQueryParams
	Headers     GetCrawlerMetricsHeaders
	Request     shared.GetCrawlerMetricsRequest `request:"mediaType=application/json"`
}

type GetCrawlerMetricsResponse struct {
	ContentType               string
	GetCrawlerMetricsResponse *shared.GetCrawlerMetricsResponse
	OperationTimeoutException *interface{}
	StatusCode                int64
}
