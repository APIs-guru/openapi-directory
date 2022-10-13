package operations

import (
	"openapi/pkg/models/shared"
)

type StopTrainingDocumentClassifierXAmzTargetEnum string

const (
	StopTrainingDocumentClassifierXAmzTargetEnumComprehend20171127StopTrainingDocumentClassifier StopTrainingDocumentClassifierXAmzTargetEnum = "Comprehend_20171127.StopTrainingDocumentClassifier"
)

type StopTrainingDocumentClassifierHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopTrainingDocumentClassifierXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopTrainingDocumentClassifierRequest struct {
	Headers StopTrainingDocumentClassifierHeaders
	Request shared.StopTrainingDocumentClassifierRequest `request:"mediaType=application/json"`
}

type StopTrainingDocumentClassifierResponse struct {
	ContentType                            string
	InternalServerException                *interface{}
	InvalidRequestException                *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	StopTrainingDocumentClassifierResponse map[string]interface{}
	TooManyRequestsException               *interface{}
}
