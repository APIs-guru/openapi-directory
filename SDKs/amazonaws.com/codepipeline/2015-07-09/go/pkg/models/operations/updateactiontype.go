package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateActionTypeXAmzTargetEnum string

const (
	UpdateActionTypeXAmzTargetEnumCodePipeline20150709UpdateActionType UpdateActionTypeXAmzTargetEnum = "CodePipeline_20150709.UpdateActionType"
)

type UpdateActionTypeHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateActionTypeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateActionTypeRequest struct {
	Headers UpdateActionTypeHeaders
	Request shared.UpdateActionTypeInput `request:"mediaType=application/json"`
}

type UpdateActionTypeResponse struct {
	ActionTypeNotFoundException *interface{}
	ContentType                 string
	RequestFailedException      *interface{}
	StatusCode                  int64
	ValidationException         *interface{}
}
