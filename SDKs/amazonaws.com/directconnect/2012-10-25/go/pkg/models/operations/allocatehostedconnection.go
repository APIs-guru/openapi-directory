package operations

import (
	"openapi/pkg/models/shared"
)

type AllocateHostedConnectionXAmzTargetEnum string

const (
	AllocateHostedConnectionXAmzTargetEnumOvertureServiceAllocateHostedConnection AllocateHostedConnectionXAmzTargetEnum = "OvertureService.AllocateHostedConnection"
)

type AllocateHostedConnectionHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AllocateHostedConnectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
