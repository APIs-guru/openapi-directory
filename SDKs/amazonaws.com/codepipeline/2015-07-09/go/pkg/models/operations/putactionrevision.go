package operations

import (
	"openapi/pkg/models/shared"
)

type PutActionRevisionXAmzTargetEnum string

const (
	PutActionRevisionXAmzTargetEnumCodePipeline20150709PutActionRevision PutActionRevisionXAmzTargetEnum = "CodePipeline_20150709.PutActionRevision"
)

type PutActionRevisionHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutActionRevisionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PutActionRevisionRequest struct {
	Headers PutActionRevisionHeaders
	Request shared.PutActionRevisionInput `request:"mediaType=application/json"`
}

type PutActionRevisionResponse struct {
	ActionNotFoundException   *interface{}
	ContentType               string
	PipelineNotFoundException *interface{}
	PutActionRevisionOutput   *shared.PutActionRevisionOutput
	StageNotFoundException    *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
