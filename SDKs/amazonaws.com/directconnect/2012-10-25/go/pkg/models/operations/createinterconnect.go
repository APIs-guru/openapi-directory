package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInterconnectXAmzTargetEnum string

const (
	CreateInterconnectXAmzTargetEnumOvertureServiceCreateInterconnect CreateInterconnectXAmzTargetEnum = "OvertureService.CreateInterconnect"
)

type CreateInterconnectHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateInterconnectXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
