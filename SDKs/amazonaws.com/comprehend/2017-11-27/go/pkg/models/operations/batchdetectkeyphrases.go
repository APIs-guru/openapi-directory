package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDetectKeyPhrasesXAmzTargetEnum string

const (
	BatchDetectKeyPhrasesXAmzTargetEnumComprehend20171127BatchDetectKeyPhrases BatchDetectKeyPhrasesXAmzTargetEnum = "Comprehend_20171127.BatchDetectKeyPhrases"
)

type BatchDetectKeyPhrasesHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchDetectKeyPhrasesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchDetectKeyPhrasesRequest struct {
	Headers BatchDetectKeyPhrasesHeaders
	Request shared.BatchDetectKeyPhrasesRequest `request:"mediaType=application/json"`
}

type BatchDetectKeyPhrasesResponse struct {
	BatchDetectKeyPhrasesResponse   *shared.BatchDetectKeyPhrasesResponse
	BatchSizeLimitExceededException *interface{}
	ContentType                     string
	InternalServerException         *interface{}
	InvalidRequestException         *interface{}
	StatusCode                      int64
	TextSizeLimitExceededException  *interface{}
	UnsupportedLanguageException    *interface{}
}
