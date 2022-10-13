package operations

import (
	"openapi/pkg/models/shared"
)

type PutThirdPartyJobFailureResultXAmzTargetEnum string

const (
	PutThirdPartyJobFailureResultXAmzTargetEnumCodePipeline20150709PutThirdPartyJobFailureResult PutThirdPartyJobFailureResultXAmzTargetEnum = "CodePipeline_20150709.PutThirdPartyJobFailureResult"
)

type PutThirdPartyJobFailureResultHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutThirdPartyJobFailureResultXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutThirdPartyJobFailureResultRequest struct {
	Headers PutThirdPartyJobFailureResultHeaders
	Request shared.PutThirdPartyJobFailureResultInput `request:"mediaType=application/json"`
}

type PutThirdPartyJobFailureResultResponse struct {
	ContentType                 string
	InvalidClientTokenException *interface{}
	InvalidJobStateException    *interface{}
	JobNotFoundException        *interface{}
	StatusCode                  int64
	ValidationException         *interface{}
}
