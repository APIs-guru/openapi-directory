package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInterconnectXAmzTargetEnum string

const (
	CreateInterconnectXAmzTargetEnumOvertureServiceCreateInterconnect CreateInterconnectXAmzTargetEnum = "OvertureService.CreateInterconnect"
)

type CreateInterconnectHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateInterconnectXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateInterconnectRequest struct {
	Headers CreateInterconnectHeaders
	Request shared.CreateInterconnectRequest `request:"mediaType=application/json"`
}

type CreateInterconnectResponse struct {
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	DuplicateTagKeysException    *interface{}
	Interconnect                 *shared.Interconnect
	StatusCode                   int64
	TooManyTagsException         *interface{}
}
