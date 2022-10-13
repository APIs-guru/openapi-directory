package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCustomActionTypeXAmzTargetEnum string

const (
	CreateCustomActionTypeXAmzTargetEnumCodePipeline20150709CreateCustomActionType CreateCustomActionTypeXAmzTargetEnum = "CodePipeline_20150709.CreateCustomActionType"
)

type CreateCustomActionTypeHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCustomActionTypeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateCustomActionTypeRequest struct {
	Headers CreateCustomActionTypeHeaders
	Request shared.CreateCustomActionTypeInput `request:"mediaType=application/json"`
}

type CreateCustomActionTypeResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	CreateCustomActionTypeOutput    *shared.CreateCustomActionTypeOutput
	InvalidTagsException            *interface{}
	LimitExceededException          *interface{}
	StatusCode                      int64
	TooManyTagsException            *interface{}
	ValidationException             *interface{}
}
