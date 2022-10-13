package operations

import (
	"openapi/pkg/models/shared"
)

type StopCrawlerXAmzTargetEnum string

const (
	StopCrawlerXAmzTargetEnumAwsGlueStopCrawler StopCrawlerXAmzTargetEnum = "AWSGlue.StopCrawler"
)

type StopCrawlerHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopCrawlerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopCrawlerRequest struct {
	Headers StopCrawlerHeaders
	Request shared.StopCrawlerRequest `request:"mediaType=application/json"`
}

type StopCrawlerResponse struct {
	ContentType                string
	CrawlerNotRunningException *interface{}
	CrawlerStoppingException   *interface{}
	EntityNotFoundException    *interface{}
	OperationTimeoutException  *interface{}
	StatusCode                 int64
	StopCrawlerResponse        map[string]interface{}
}
