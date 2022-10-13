package operations

import (
	"openapi/pkg/models/shared"
)

type PutJobFailureResultXAmzTargetEnum string

const (
	PutJobFailureResultXAmzTargetEnumCodePipeline20150709PutJobFailureResult PutJobFailureResultXAmzTargetEnum = "CodePipeline_20150709.PutJobFailureResult"
)

type PutJobFailureResultHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutJobFailureResultXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutJobFailureResultRequest struct {
	Headers PutJobFailureResultHeaders
	Request shared.PutJobFailureResultInput `request:"mediaType=application/json"`
}

type PutJobFailureResultResponse struct {
	ContentType              string
	InvalidJobStateException *interface{}
	JobNotFoundException     *interface{}
	StatusCode               int64
	ValidationException      *interface{}
}
