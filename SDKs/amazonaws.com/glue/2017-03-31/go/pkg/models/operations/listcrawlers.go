package operations

import (
	"openapi/pkg/models/shared"
)

type ListCrawlersQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListCrawlersXAmzTargetEnum string

const (
	ListCrawlersXAmzTargetEnumAwsGlueListCrawlers ListCrawlersXAmzTargetEnum = "AWSGlue.ListCrawlers"
)

type ListCrawlersHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCrawlersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListCrawlersRequest struct {
	QueryParams ListCrawlersQueryParams
	Headers     ListCrawlersHeaders
	Request     shared.ListCrawlersRequest `request:"mediaType=application/json"`
}

type ListCrawlersResponse struct {
	ContentType               string
	ListCrawlersResponse      *shared.ListCrawlersResponse
	OperationTimeoutException *interface{}
	StatusCode                int64
}
