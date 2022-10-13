package operations

import (
	"openapi/pkg/models/shared"
)

type SendSerialConsoleSSHPublicKeyXAmzTargetEnum string

const (
	SendSerialConsoleSSHPublicKeyXAmzTargetEnumAwsec2InstanceConnectServiceSendSerialConsoleSSHPublicKey SendSerialConsoleSSHPublicKeyXAmzTargetEnum = "AWSEC2InstanceConnectService.SendSerialConsoleSSHPublicKey"
)

type SendSerialConsoleSSHPublicKeyHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SendSerialConsoleSSHPublicKeyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SendSerialConsoleSSHPublicKeyRequest struct {
	Headers SendSerialConsoleSSHPublicKeyHeaders
	Request shared.SendSerialConsoleSSHPublicKeyRequest `request:"mediaType=application/json"`
}

type SendSerialConsoleSSHPublicKeyResponse struct {
	AuthException                              *interface{}
	ContentType                                string
	Ec2InstanceNotFoundException               *interface{}
	Ec2InstanceTypeInvalidException            *interface{}
	InvalidArgsException                       *interface{}
	SendSerialConsoleSSHPublicKeyResponse      *shared.SendSerialConsoleSSHPublicKeyResponse
	SerialConsoleAccessDisabledException       *interface{}
	SerialConsoleSessionLimitExceededException *interface{}
	SerialConsoleSessionUnavailableException   *interface{}
	ServiceException                           *interface{}
	StatusCode                                 int64
	ThrottlingException                        *interface{}
}
