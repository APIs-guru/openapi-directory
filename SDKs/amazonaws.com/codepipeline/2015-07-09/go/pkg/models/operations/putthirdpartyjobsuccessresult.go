package operations

import (
	"openapi/pkg/models/shared"
)

type PutThirdPartyJobSuccessResultXAmzTargetEnum string

const (
	PutThirdPartyJobSuccessResultXAmzTargetEnumCodePipeline20150709PutThirdPartyJobSuccessResult PutThirdPartyJobSuccessResultXAmzTargetEnum = "CodePipeline_20150709.PutThirdPartyJobSuccessResult"
)

type PutThirdPartyJobSuccessResultHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutThirdPartyJobSuccessResultXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutThirdPartyJobSuccessResultRequest struct {
	Headers PutThirdPartyJobSuccessResultHeaders
	Request shared.PutThirdPartyJobSuccessResultInput `request:"mediaType=application/json"`
}

type PutThirdPartyJobSuccessResultResponse struct {
	ContentType                 string
	InvalidClientTokenException *interface{}
	InvalidJobStateException    *interface{}
	JobNotFoundException        *interface{}
	StatusCode                  int64
	ValidationException         *interface{}
}
