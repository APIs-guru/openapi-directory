package operations

import (
	"openapi/pkg/models/shared"
)

type GetActionTypeXAmzTargetEnum string

const (
	GetActionTypeXAmzTargetEnumCodePipeline20150709GetActionType GetActionTypeXAmzTargetEnum = "CodePipeline_20150709.GetActionType"
)

type GetActionTypeHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetActionTypeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
