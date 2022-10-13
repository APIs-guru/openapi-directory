package operations

import (
	"openapi/pkg/models/shared"
)

type GetClassifierXAmzTargetEnum string

const (
	GetClassifierXAmzTargetEnumAwsGlueGetClassifier GetClassifierXAmzTargetEnum = "AWSGlue.GetClassifier"
)

type GetClassifierHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetClassifierXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetClassifierRequest struct {
	Headers GetClassifierHeaders
	Request shared.GetClassifierRequest `request:"mediaType=application/json"`
}

type GetClassifierResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetClassifierResponse     *shared.GetClassifierResponse
	OperationTimeoutException *interface{}
	StatusCode                int64
}
