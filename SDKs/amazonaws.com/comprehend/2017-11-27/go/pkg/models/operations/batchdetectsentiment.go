package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDetectSentimentXAmzTargetEnum string

const (
	BatchDetectSentimentXAmzTargetEnumComprehend20171127BatchDetectSentiment BatchDetectSentimentXAmzTargetEnum = "Comprehend_20171127.BatchDetectSentiment"
)

type BatchDetectSentimentHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchDetectSentimentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchDetectSentimentRequest struct {
	Headers BatchDetectSentimentHeaders
	Request shared.BatchDetectSentimentRequest `request:"mediaType=application/json"`
}

type BatchDetectSentimentResponse struct {
	BatchDetectSentimentResponse    *shared.BatchDetectSentimentResponse
	BatchSizeLimitExceededException *interface{}
	ContentType                     string
	InternalServerException         *interface{}
	InvalidRequestException         *interface{}
	StatusCode                      int64
	TextSizeLimitExceededException  *interface{}
	UnsupportedLanguageException    *interface{}
}
