package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateMacSecKeyXAmzTargetEnum string

const (
	DisassociateMacSecKeyXAmzTargetEnumOvertureServiceDisassociateMacSecKey DisassociateMacSecKeyXAmzTargetEnum = "OvertureService.DisassociateMacSecKey"
)

type DisassociateMacSecKeyHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateMacSecKeyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateMacSecKeyRequest struct {
	Headers DisassociateMacSecKeyHeaders
	Request shared.DisassociateMacSecKeyRequest `request:"mediaType=application/json"`
}

type DisassociateMacSecKeyResponse struct {
	ContentType                   string
	DirectConnectClientException  *interface{}
	DirectConnectServerException  *interface{}
	DisassociateMacSecKeyResponse *shared.DisassociateMacSecKeyResponse
	StatusCode                    int64
}
