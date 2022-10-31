package operations

import (
	"openapi/pkg/models/shared"
)

type AcknowledgeJobXAmzTargetEnum string

const (
	AcknowledgeJobXAmzTargetEnumCodePipeline20150709AcknowledgeJob AcknowledgeJobXAmzTargetEnum = "CodePipeline_20150709.AcknowledgeJob"
)

type AcknowledgeJobHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AcknowledgeJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AcknowledgeJobRequest struct {
	Headers AcknowledgeJobHeaders
	Request shared.AcknowledgeJobInput `request:"mediaType=application/json"`
}

type AcknowledgeJobResponse struct {
	AcknowledgeJobOutput  *shared.AcknowledgeJobOutput
	ContentType           string
	InvalidNonceException *interface{}
	JobNotFoundException  *interface{}
	StatusCode            int64
	ValidationException   *interface{}
}
