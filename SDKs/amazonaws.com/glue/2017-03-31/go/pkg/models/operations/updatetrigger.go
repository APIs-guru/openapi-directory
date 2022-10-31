package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTriggerXAmzTargetEnum string

const (
	UpdateTriggerXAmzTargetEnumAwsGlueUpdateTrigger UpdateTriggerXAmzTargetEnum = "AWSGlue.UpdateTrigger"
)

type UpdateTriggerHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateTriggerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateTriggerRequest struct {
	Headers UpdateTriggerHeaders
	Request shared.UpdateTriggerRequest `request:"mediaType=application/json"`
}

type UpdateTriggerResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	EntityNotFoundException         *interface{}
	InternalServiceException        *interface{}
	InvalidInputException           *interface{}
	OperationTimeoutException       *interface{}
	StatusCode                      int64
	UpdateTriggerResponse           *shared.UpdateTriggerResponse
}
