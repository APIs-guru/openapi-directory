package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateMacSecKeyXAmzTargetEnum string

const (
	DisassociateMacSecKeyXAmzTargetEnumOvertureServiceDisassociateMacSecKey DisassociateMacSecKeyXAmzTargetEnum = "OvertureService.DisassociateMacSecKey"
)

type DisassociateMacSecKeyHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateMacSecKeyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
