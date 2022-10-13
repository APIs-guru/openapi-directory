package operations

import (
	"openapi/pkg/models/shared"
)

type BatchDetectSyntaxXAmzTargetEnum string

const (
	BatchDetectSyntaxXAmzTargetEnumComprehend20171127BatchDetectSyntax BatchDetectSyntaxXAmzTargetEnum = "Comprehend_20171127.BatchDetectSyntax"
)

type BatchDetectSyntaxHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchDetectSyntaxXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchDetectSyntaxRequest struct {
	Headers BatchDetectSyntaxHeaders
	Request shared.BatchDetectSyntaxRequest `request:"mediaType=application/json"`
}

type BatchDetectSyntaxResponse struct {
	BatchDetectSyntaxResponse       *shared.BatchDetectSyntaxResponse
	BatchSizeLimitExceededException *interface{}
	ContentType                     string
	InternalServerException         *interface{}
	InvalidRequestException         *interface{}
	StatusCode                      int64
	TextSizeLimitExceededException  *interface{}
	UnsupportedLanguageException    *interface{}
}
