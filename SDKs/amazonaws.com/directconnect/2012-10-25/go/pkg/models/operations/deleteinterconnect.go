package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteInterconnectXAmzTargetEnum string

const (
	DeleteInterconnectXAmzTargetEnumOvertureServiceDeleteInterconnect DeleteInterconnectXAmzTargetEnum = "OvertureService.DeleteInterconnect"
)

type DeleteInterconnectHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteInterconnectXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteInterconnectRequest struct {
	Headers DeleteInterconnectHeaders
	Request shared.DeleteInterconnectRequest `request:"mediaType=application/json"`
}

type DeleteInterconnectResponse struct {
	ContentType                  string
	DeleteInterconnectResponse   *shared.DeleteInterconnectResponse
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	StatusCode                   int64
}
