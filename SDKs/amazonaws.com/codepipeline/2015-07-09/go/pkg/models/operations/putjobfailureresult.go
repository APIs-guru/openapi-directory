package operations

import (
	"openapi/pkg/models/shared"
)

type PutJobFailureResultXAmzTargetEnum string

const (
	PutJobFailureResultXAmzTargetEnumCodePipeline20150709PutJobFailureResult PutJobFailureResultXAmzTargetEnum = "CodePipeline_20150709.PutJobFailureResult"
)

type PutJobFailureResultHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutJobFailureResultXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
