package operations

import (
	"openapi/pkg/models/shared"
)

type AllocateHostedConnectionXAmzTargetEnum string

const (
	AllocateHostedConnectionXAmzTargetEnumOvertureServiceAllocateHostedConnection AllocateHostedConnectionXAmzTargetEnum = "OvertureService.AllocateHostedConnection"
)

type AllocateHostedConnectionHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AllocateHostedConnectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AllocateHostedConnectionRequest struct {
	Headers AllocateHostedConnectionHeaders
	Request shared.AllocateHostedConnectionRequest `request:"mediaType=application/json"`
}

type AllocateHostedConnectionResponse struct {
	Connection                   *shared.Connection
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	DuplicateTagKeysException    *interface{}
	StatusCode                   int64
	TooManyTagsException         *interface{}
}
