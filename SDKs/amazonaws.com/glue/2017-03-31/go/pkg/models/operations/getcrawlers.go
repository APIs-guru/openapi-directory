package operations

import (
	"openapi/pkg/models/shared"
)

type GetCrawlersQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetCrawlersXAmzTargetEnum string

const (
	GetCrawlersXAmzTargetEnumAwsGlueGetCrawlers GetCrawlersXAmzTargetEnum = "AWSGlue.GetCrawlers"
)

type GetCrawlersHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCrawlersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetCrawlersRequest struct {
	QueryParams GetCrawlersQueryParams
	Headers     GetCrawlersHeaders
	Request     shared.GetCrawlersRequest `request:"mediaType=application/json"`
}

type GetCrawlersResponse struct {
	ContentType               string
	GetCrawlersResponse       *shared.GetCrawlersResponse
	OperationTimeoutException *interface{}
	StatusCode                int64
}
