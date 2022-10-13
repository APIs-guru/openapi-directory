package operations

import (
	"openapi/pkg/models/shared"
)

type GetJobDetailsXAmzTargetEnum string

const (
	GetJobDetailsXAmzTargetEnumCodePipeline20150709GetJobDetails GetJobDetailsXAmzTargetEnum = "CodePipeline_20150709.GetJobDetails"
)

type GetJobDetailsHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetJobDetailsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetJobDetailsRequest struct {
	Headers GetJobDetailsHeaders
	Request shared.GetJobDetailsInput `request:"mediaType=application/json"`
}

type GetJobDetailsResponse struct {
	ContentType          string
	GetJobDetailsOutput  *shared.GetJobDetailsOutput
	JobNotFoundException *interface{}
	StatusCode           int64
	ValidationException  *interface{}
}
