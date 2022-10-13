package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDetectEntitiesXAmzTargetEnum string

const (
	BatchDetectEntitiesXAmzTargetEnumComprehend20171127BatchDetectEntities BatchDetectEntitiesXAmzTargetEnum = "Comprehend_20171127.BatchDetectEntities"
)

type BatchDetectEntitiesHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchDetectEntitiesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchDetectEntitiesRequest struct {
	Headers BatchDetectEntitiesHeaders
	Request shared.BatchDetectEntitiesRequest `request:"mediaType=application/json"`
}

type BatchDetectEntitiesResponse struct {
	BatchDetectEntitiesResponse     *shared.BatchDetectEntitiesResponse
	BatchSizeLimitExceededException *interface{}
	ContentType                     string
	InternalServerException         *interface{}
	InvalidRequestException         *interface{}
	StatusCode                      int64
	TextSizeLimitExceededException  *interface{}
	UnsupportedLanguageException    *interface{}
}
