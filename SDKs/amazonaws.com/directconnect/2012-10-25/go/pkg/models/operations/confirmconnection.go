package operations

import (
	"openapi/pkg/models/shared"
)

type ConfirmConnectionXAmzTargetEnum string

const (
	ConfirmConnectionXAmzTargetEnumOvertureServiceConfirmConnection ConfirmConnectionXAmzTargetEnum = "OvertureService.ConfirmConnection"
)

type ConfirmConnectionHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ConfirmConnectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ConfirmConnectionRequest struct {
	Headers ConfirmConnectionHeaders
	Request shared.ConfirmConnectionRequest `request:"mediaType=application/json"`
}

type ConfirmConnectionResponse struct {
	ConfirmConnectionResponse    *shared.ConfirmConnectionResponse
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	StatusCode                   int64
}
