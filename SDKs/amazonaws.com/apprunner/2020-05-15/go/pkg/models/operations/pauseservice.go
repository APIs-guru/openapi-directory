package operations

import (
	"openapi/pkg/models/shared"
)

type PauseServiceXAmzTargetEnum string

const (
	PauseServiceXAmzTargetEnumAppRunnerPauseService PauseServiceXAmzTargetEnum = "AppRunner.PauseService"
)

type PauseServiceHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PauseServiceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PauseServiceRequest struct {
	Headers PauseServiceHeaders
	Request shared.PauseServiceRequest `request:"mediaType=application/json"`
}

type PauseServiceResponse struct {
	ContentType                   string
	InternalServiceErrorException *interface{}
	InvalidRequestException       *interface{}
	InvalidStateException         *interface{}
	PauseServiceResponse          *shared.PauseServiceResponse
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
}
