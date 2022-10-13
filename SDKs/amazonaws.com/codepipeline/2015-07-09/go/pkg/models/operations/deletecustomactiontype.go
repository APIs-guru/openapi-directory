package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCustomActionTypeXAmzTargetEnum string

const (
	DeleteCustomActionTypeXAmzTargetEnumCodePipeline20150709DeleteCustomActionType DeleteCustomActionTypeXAmzTargetEnum = "CodePipeline_20150709.DeleteCustomActionType"
)

type DeleteCustomActionTypeHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteCustomActionTypeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteCustomActionTypeRequest struct {
	Headers DeleteCustomActionTypeHeaders
	Request shared.DeleteCustomActionTypeInput `request:"mediaType=application/json"`
}

type DeleteCustomActionTypeResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	StatusCode                      int64
	ValidationException             *interface{}
}
