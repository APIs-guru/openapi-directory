package operations

import (
	"openapi/pkg/models/shared"
)

type GetCrawlerXAmzTargetEnum string

const (
	GetCrawlerXAmzTargetEnumAwsGlueGetCrawler GetCrawlerXAmzTargetEnum = "AWSGlue.GetCrawler"
)

type GetCrawlerHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCrawlerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetCrawlerRequest struct {
	Headers GetCrawlerHeaders
	Request shared.GetCrawlerRequest `request:"mediaType=application/json"`
}

type GetCrawlerResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetCrawlerResponse        *shared.GetCrawlerResponse
	OperationTimeoutException *interface{}
	StatusCode                int64
}
