package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterDevicePathParams struct {
	IdentityID     string `pathParam:"style=simple,explode=false,name=IdentityId"`
	IdentityPoolID string `pathParam:"style=simple,explode=false,name=IdentityPoolId"`
}

type RegisterDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type RegisterDeviceRequestBodyPlatformEnum string

const (
	RegisterDeviceRequestBodyPlatformEnumApns        RegisterDeviceRequestBodyPlatformEnum = "APNS"
	RegisterDeviceRequestBodyPlatformEnumApnsSandbox RegisterDeviceRequestBodyPlatformEnum = "APNS_SANDBOX"
	RegisterDeviceRequestBodyPlatformEnumGcm         RegisterDeviceRequestBodyPlatformEnum = "GCM"
	RegisterDeviceRequestBodyPlatformEnumAdm         RegisterDeviceRequestBodyPlatformEnum = "ADM"
)

type RegisterDeviceRequestBody struct {
	Platform RegisterDeviceRequestBodyPlatformEnum `json:"Platform"`
	Token    string                                `json:"Token"`
}

type RegisterDeviceRequest struct {
	PathParams RegisterDevicePathParams
	Headers    RegisterDeviceHeaders
	Request    RegisterDeviceRequestBody `request:"mediaType=application/json"`
}

type RegisterDeviceResponse struct {
	ContentType                   string
	InternalErrorException        *interface{}
	InvalidConfigurationException *interface{}
	InvalidParameterException     *interface{}
	NotAuthorizedException        *interface{}
	RegisterDeviceResponse        *shared.RegisterDeviceResponse
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	TooManyRequestsException      *interface{}
}
