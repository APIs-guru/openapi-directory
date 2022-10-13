package operations

import (
	"openapi/pkg/models/shared"
)

type GetConfigXAmzTargetEnum string

const (
	GetConfigXAmzTargetEnumCloudHsmFrontendServiceGetConfig GetConfigXAmzTargetEnum = "CloudHsmFrontendService.GetConfig"
)

type GetConfigHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetConfigRequest struct {
	Headers GetConfigHeaders
	Request shared.GetConfigRequest `request:"mediaType=application/json"`
}

type GetConfigResponse struct {
	CloudHsmInternalException *interface{}
	CloudHsmServiceException  *interface{}
	ContentType               string
	GetConfigResponse         *shared.GetConfigResponse
	InvalidRequestException   *interface{}
	StatusCode                int64
}
