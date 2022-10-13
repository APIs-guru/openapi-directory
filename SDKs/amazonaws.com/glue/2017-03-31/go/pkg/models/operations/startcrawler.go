package operations

import (
	"openapi/pkg/models/shared"
)

type StartCrawlerXAmzTargetEnum string

const (
	StartCrawlerXAmzTargetEnumAwsGlueStartCrawler StartCrawlerXAmzTargetEnum = "AWSGlue.StartCrawler"
)

type StartCrawlerHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartCrawlerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartCrawlerRequest struct {
	Headers StartCrawlerHeaders
	Request shared.StartCrawlerRequest `request:"mediaType=application/json"`
}

type StartCrawlerResponse struct {
	ContentType               string
	CrawlerRunningException   *interface{}
	EntityNotFoundException   *interface{}
	OperationTimeoutException *interface{}
	StartCrawlerResponse      map[string]interface{}
	StatusCode                int64
}
