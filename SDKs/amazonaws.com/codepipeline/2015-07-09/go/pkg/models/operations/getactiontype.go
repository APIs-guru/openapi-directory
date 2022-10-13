package operations

import (
	"openapi/pkg/models/shared"
)

type GetActionTypeXAmzTargetEnum string

const (
	GetActionTypeXAmzTargetEnumCodePipeline20150709GetActionType GetActionTypeXAmzTargetEnum = "CodePipeline_20150709.GetActionType"
)

type GetActionTypeHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetActionTypeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetActionTypeRequest struct {
	Headers GetActionTypeHeaders
	Request shared.GetActionTypeInput `request:"mediaType=application/json"`
}

type GetActionTypeResponse struct {
	ActionTypeNotFoundException *interface{}
	ContentType                 string
	GetActionTypeOutput         *shared.GetActionTypeOutput
	StatusCode                  int64
	ValidationException         *interface{}
}
