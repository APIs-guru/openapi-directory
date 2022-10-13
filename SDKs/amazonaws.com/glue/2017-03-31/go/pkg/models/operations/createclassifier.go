package operations

import (
	"openapi/pkg/models/shared"
)

type CreateClassifierXAmzTargetEnum string

const (
	CreateClassifierXAmzTargetEnumAwsGlueCreateClassifier CreateClassifierXAmzTargetEnum = "AWSGlue.CreateClassifier"
)

type CreateClassifierHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateClassifierXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateClassifierRequest struct {
	Headers CreateClassifierHeaders
	Request shared.CreateClassifierRequest `request:"mediaType=application/json"`
}

type CreateClassifierResponse struct {
	AlreadyExistsException    *interface{}
	ContentType               string
	CreateClassifierResponse  map[string]interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
