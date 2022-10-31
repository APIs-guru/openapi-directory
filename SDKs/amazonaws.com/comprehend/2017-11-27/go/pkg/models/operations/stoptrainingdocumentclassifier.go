package operations

import (
	"openapi/pkg/models/shared"
)

type StopTrainingDocumentClassifierXAmzTargetEnum string

const (
	StopTrainingDocumentClassifierXAmzTargetEnumComprehend20171127StopTrainingDocumentClassifier StopTrainingDocumentClassifierXAmzTargetEnum = "Comprehend_20171127.StopTrainingDocumentClassifier"
)

type StopTrainingDocumentClassifierHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopTrainingDocumentClassifierXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
