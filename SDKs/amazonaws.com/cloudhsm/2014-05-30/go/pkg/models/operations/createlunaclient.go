package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLunaClientXAmzTargetEnum string

const (
	CreateLunaClientXAmzTargetEnumCloudHsmFrontendServiceCreateLunaClient CreateLunaClientXAmzTargetEnum = "CloudHsmFrontendService.CreateLunaClient"
)

type CreateLunaClientHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLunaClientXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateLunaClientRequest struct {
	Headers CreateLunaClientHeaders
	Request shared.CreateLunaClientRequest `request:"mediaType=application/json"`
}

type CreateLunaClientResponse struct {
	CloudHsmInternalException *interface{}
	CloudHsmServiceException  *interface{}
	ContentType               string
	CreateLunaClientResponse  *shared.CreateLunaClientResponse
	InvalidRequestException   *interface{}
	StatusCode                int64
}
