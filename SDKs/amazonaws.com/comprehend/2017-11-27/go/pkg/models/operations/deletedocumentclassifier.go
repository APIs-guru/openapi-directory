package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDocumentClassifierXAmzTargetEnum string

const (
	DeleteDocumentClassifierXAmzTargetEnumComprehend20171127DeleteDocumentClassifier DeleteDocumentClassifierXAmzTargetEnum = "Comprehend_20171127.DeleteDocumentClassifier"
)

type DeleteDocumentClassifierHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteDocumentClassifierXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteDocumentClassifierRequest struct {
	Headers DeleteDocumentClassifierHeaders
	Request shared.DeleteDocumentClassifierRequest `request:"mediaType=application/json"`
}

type DeleteDocumentClassifierResponse struct {
	ContentType                      string
	DeleteDocumentClassifierResponse map[string]interface{}
	InternalServerException          *interface{}
	InvalidRequestException          *interface{}
	ResourceInUseException           *interface{}
	ResourceNotFoundException        *interface{}
	ResourceUnavailableException     *interface{}
	StatusCode                       int64
	TooManyRequestsException         *interface{}
}
