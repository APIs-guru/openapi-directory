package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDocumentClassifierXAmzTargetEnum string

const (
	CreateDocumentClassifierXAmzTargetEnumComprehend20171127CreateDocumentClassifier CreateDocumentClassifierXAmzTargetEnum = "Comprehend_20171127.CreateDocumentClassifier"
)

type CreateDocumentClassifierHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDocumentClassifierXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDocumentClassifierRequest struct {
	Headers CreateDocumentClassifierHeaders
	Request shared.CreateDocumentClassifierRequest `request:"mediaType=application/json"`
}

type CreateDocumentClassifierResponse struct {
	ContentType                      string
	CreateDocumentClassifierResponse *shared.CreateDocumentClassifierResponse
	InternalServerException          *interface{}
	InvalidRequestException          *interface{}
	KmsKeyValidationException        *interface{}
	ResourceInUseException           *interface{}
	ResourceLimitExceededException   *interface{}
	StatusCode                       int64
	TooManyRequestsException         *interface{}
	TooManyTagsException             *interface{}
	UnsupportedLanguageException     *interface{}
}
