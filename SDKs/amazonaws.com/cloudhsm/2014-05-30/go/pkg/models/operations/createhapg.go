package operations

import (
	"openapi/pkg/models/shared"
)

type CreateHapgXAmzTargetEnum string

const (
	CreateHapgXAmzTargetEnumCloudHsmFrontendServiceCreateHapg CreateHapgXAmzTargetEnum = "CloudHsmFrontendService.CreateHapg"
)

type CreateHapgHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateHapgXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateHapgRequest struct {
	Headers CreateHapgHeaders
	Request shared.CreateHapgRequest `request:"mediaType=application/json"`
}

type CreateHapgResponse struct {
	CloudHsmInternalException *interface{}
	CloudHsmServiceException  *interface{}
	ContentType               string
	CreateHapgResponse        *shared.CreateHapgResponse
	InvalidRequestException   *interface{}
	StatusCode                int64
}
