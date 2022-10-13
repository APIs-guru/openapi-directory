package operations

import (
	"openapi/pkg/models/shared"
)

type PutApprovalResultXAmzTargetEnum string

const (
	PutApprovalResultXAmzTargetEnumCodePipeline20150709PutApprovalResult PutApprovalResultXAmzTargetEnum = "CodePipeline_20150709.PutApprovalResult"
)

type PutApprovalResultHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutApprovalResultXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutApprovalResultRequest struct {
	Headers PutApprovalResultHeaders
	Request shared.PutApprovalResultInput `request:"mediaType=application/json"`
}

type PutApprovalResultResponse struct {
	ActionNotFoundException           *interface{}
	ApprovalAlreadyCompletedException *interface{}
	ContentType                       string
	InvalidApprovalTokenException     *interface{}
	PipelineNotFoundException         *interface{}
	PutApprovalResultOutput           *shared.PutApprovalResultOutput
	StageNotFoundException            *interface{}
	StatusCode                        int64
	ValidationException               *interface{}
}
