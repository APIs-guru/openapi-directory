package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateConnectionXAmzTargetEnum string

const (
	UpdateConnectionXAmzTargetEnumOvertureServiceUpdateConnection UpdateConnectionXAmzTargetEnum = "OvertureService.UpdateConnection"
)

type UpdateConnectionHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateConnectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateConnectionRequest struct {
	Headers UpdateConnectionHeaders
	Request shared.UpdateConnectionRequest `request:"mediaType=application/json"`
}

type UpdateConnectionResponse struct {
	Connection                   *shared.Connection
	ContentType                  string
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	StatusCode                   int64
}
