package operations

import (
	"openapi/pkg/models/shared"
)

type AcknowledgeThirdPartyJobXAmzTargetEnum string

const (
	AcknowledgeThirdPartyJobXAmzTargetEnumCodePipeline20150709AcknowledgeThirdPartyJob AcknowledgeThirdPartyJobXAmzTargetEnum = "CodePipeline_20150709.AcknowledgeThirdPartyJob"
)

type AcknowledgeThirdPartyJobHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AcknowledgeThirdPartyJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AcknowledgeThirdPartyJobRequest struct {
	Headers AcknowledgeThirdPartyJobHeaders
	Request shared.AcknowledgeThirdPartyJobInput `request:"mediaType=application/json"`
}

type AcknowledgeThirdPartyJobResponse struct {
	AcknowledgeThirdPartyJobOutput *shared.AcknowledgeThirdPartyJobOutput
	ContentType                    string
	InvalidClientTokenException    *interface{}
	InvalidNonceException          *interface{}
	JobNotFoundException           *interface{}
	StatusCode                     int64
	ValidationException            *interface{}
}
