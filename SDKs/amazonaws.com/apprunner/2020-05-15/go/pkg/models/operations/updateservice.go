package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServiceXAmzTargetEnum string

const (
	UpdateServiceXAmzTargetEnumAppRunnerUpdateService UpdateServiceXAmzTargetEnum = "AppRunner.UpdateService"
)

type UpdateServiceHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateServiceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateServiceRequest struct {
	Headers UpdateServiceHeaders
	Request shared.UpdateServiceRequest `request:"mediaType=application/json"`
}

type UpdateServiceResponse struct {
	ContentType                   string
	InternalServiceErrorException *interface{}
	InvalidRequestException       *interface{}
	InvalidStateException         *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	UpdateServiceResponse         *shared.UpdateServiceResponse
}
