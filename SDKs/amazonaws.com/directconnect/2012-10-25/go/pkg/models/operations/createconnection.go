package operations

import (
	"openapi/pkg/models/shared"
)

type CreateConnectionXAmzTargetEnum string

const (
	CreateConnectionXAmzTargetEnumOvertureServiceCreateConnection CreateConnectionXAmzTargetEnum = "OvertureService.CreateConnection"
)

type CreateConnectionHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateConnectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateConnectionRequest struct {
	Headers CreateConnectionHeaders
	Request shared.CreateConnectionRequest `request:"mediaType=application/json"`
}

type CreateConnectionResponse struct {
	Connection                   *shared.Connection
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	DuplicateTagKeysException    *interface{}
	StatusCode                   int64
	TooManyTagsException         *interface{}
}
