package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDetectDominantLanguageXAmzTargetEnum string

const (
	BatchDetectDominantLanguageXAmzTargetEnumComprehend20171127BatchDetectDominantLanguage BatchDetectDominantLanguageXAmzTargetEnum = "Comprehend_20171127.BatchDetectDominantLanguage"
)

type BatchDetectDominantLanguageHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchDetectDominantLanguageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchDetectDominantLanguageRequest struct {
	Headers BatchDetectDominantLanguageHeaders
	Request shared.BatchDetectDominantLanguageRequest `request:"mediaType=application/json"`
}

type BatchDetectDominantLanguageResponse struct {
	BatchDetectDominantLanguageResponse *shared.BatchDetectDominantLanguageResponse
	BatchSizeLimitExceededException     *interface{}
	ContentType                         string
	InternalServerException             *interface{}
	InvalidRequestException             *interface{}
	StatusCode                          int64
	TextSizeLimitExceededException      *interface{}
}
