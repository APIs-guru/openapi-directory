package operations

import (
	"openapi/pkg/models/shared"
)

type AllocateConnectionOnInterconnectXAmzTargetEnum string

const (
	AllocateConnectionOnInterconnectXAmzTargetEnumOvertureServiceAllocateConnectionOnInterconnect AllocateConnectionOnInterconnectXAmzTargetEnum = "OvertureService.AllocateConnectionOnInterconnect"
)

type AllocateConnectionOnInterconnectHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AllocateConnectionOnInterconnectXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AllocateConnectionOnInterconnectRequest struct {
	Headers AllocateConnectionOnInterconnectHeaders
	Request shared.AllocateConnectionOnInterconnectRequest `request:"mediaType=application/json"`
}

type AllocateConnectionOnInterconnectResponse struct {
	Connection                   *shared.Connection
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	StatusCode                   int64
}
