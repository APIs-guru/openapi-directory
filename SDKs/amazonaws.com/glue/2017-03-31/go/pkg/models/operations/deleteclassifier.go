package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteClassifierXAmzTargetEnum string

const (
	DeleteClassifierXAmzTargetEnumAwsGlueDeleteClassifier DeleteClassifierXAmzTargetEnum = "AWSGlue.DeleteClassifier"
)

type DeleteClassifierHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteClassifierXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteClassifierRequest struct {
	Headers DeleteClassifierHeaders
	Request shared.DeleteClassifierRequest `request:"mediaType=application/json"`
}

type DeleteClassifierResponse struct {
	ContentType               string
	DeleteClassifierResponse  map[string]interface{}
	EntityNotFoundException   *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
