package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCrawlerXAmzTargetEnum string

const (
	DeleteCrawlerXAmzTargetEnumAwsGlueDeleteCrawler DeleteCrawlerXAmzTargetEnum = "AWSGlue.DeleteCrawler"
)

type DeleteCrawlerHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteCrawlerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteCrawlerRequest struct {
	Headers DeleteCrawlerHeaders
	Request shared.DeleteCrawlerRequest `request:"mediaType=application/json"`
}

type DeleteCrawlerResponse struct {
	ContentType                     string
	CrawlerRunningException         *interface{}
	DeleteCrawlerResponse           map[string]interface{}
	EntityNotFoundException         *interface{}
	OperationTimeoutException       *interface{}
	SchedulerTransitioningException *interface{}
	StatusCode                      int64
}
