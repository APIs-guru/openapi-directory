package operations

import (
	"openapi/pkg/models/shared"
)

type BatchGetCrawlersXAmzTargetEnum string

const (
	BatchGetCrawlersXAmzTargetEnumAwsGlueBatchGetCrawlers BatchGetCrawlersXAmzTargetEnum = "AWSGlue.BatchGetCrawlers"
)

type BatchGetCrawlersHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchGetCrawlersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchGetCrawlersRequest struct {
	Headers BatchGetCrawlersHeaders
	Request shared.BatchGetCrawlersRequest `request:"mediaType=application/json"`
}

type BatchGetCrawlersResponse struct {
	BatchGetCrawlersResponse  *shared.BatchGetCrawlersResponse
	ContentType               string
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
