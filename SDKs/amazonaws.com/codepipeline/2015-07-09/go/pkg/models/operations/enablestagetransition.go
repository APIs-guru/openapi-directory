package operations

import (
	"openapi/pkg/models/shared"
)

type EnableStageTransitionXAmzTargetEnum string

const (
	EnableStageTransitionXAmzTargetEnumCodePipeline20150709EnableStageTransition EnableStageTransitionXAmzTargetEnum = "CodePipeline_20150709.EnableStageTransition"
)

type EnableStageTransitionHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        EnableStageTransitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type EnableStageTransitionRequest struct {
	Headers EnableStageTransitionHeaders
	Request shared.EnableStageTransitionInput `request:"mediaType=application/json"`
}

type EnableStageTransitionResponse struct {
	ContentType               string
	PipelineNotFoundException *interface{}
	StageNotFoundException    *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
