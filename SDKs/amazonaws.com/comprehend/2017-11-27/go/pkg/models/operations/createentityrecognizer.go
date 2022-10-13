package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEntityRecognizerXAmzTargetEnum string

const (
	CreateEntityRecognizerXAmzTargetEnumComprehend20171127CreateEntityRecognizer CreateEntityRecognizerXAmzTargetEnum = "Comprehend_20171127.CreateEntityRecognizer"
)

type CreateEntityRecognizerHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateEntityRecognizerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateEntityRecognizerRequest struct {
	Headers CreateEntityRecognizerHeaders
	Request shared.CreateEntityRecognizerRequest `request:"mediaType=application/json"`
}

type CreateEntityRecognizerResponse struct {
	ContentType                    string
	CreateEntityRecognizerResponse *shared.CreateEntityRecognizerResponse
	InternalServerException        *interface{}
	InvalidRequestException        *interface{}
	KmsKeyValidationException      *interface{}
	ResourceInUseException         *interface{}
	ResourceLimitExceededException *interface{}
	StatusCode                     int64
	TooManyRequestsException       *interface{}
	TooManyTagsException           *interface{}
	UnsupportedLanguageException   *interface{}
}
