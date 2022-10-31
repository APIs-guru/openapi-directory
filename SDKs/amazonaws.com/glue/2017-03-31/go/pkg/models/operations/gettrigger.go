package operations

import (
	"openapi/pkg/models/shared"
)

type GetTriggerXAmzTargetEnum string

const (
	GetTriggerXAmzTargetEnumAwsGlueGetTrigger GetTriggerXAmzTargetEnum = "AWSGlue.GetTrigger"
)

type GetTriggerHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetTriggerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetTriggerRequest struct {
	Headers GetTriggerHeaders
	Request shared.GetTriggerRequest `request:"mediaType=application/json"`
}

type GetTriggerResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetTriggerResponse        *shared.GetTriggerResponse
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
