package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteBgpPeerXAmzTargetEnum string

const (
	DeleteBgpPeerXAmzTargetEnumOvertureServiceDeleteBgpPeer DeleteBgpPeerXAmzTargetEnum = "OvertureService.DeleteBGPPeer"
)

type DeleteBgpPeerHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteBgpPeerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteBgpPeerRequest struct {
	Headers DeleteBgpPeerHeaders
	Request shared.DeleteBgpPeerRequest `request:"mediaType=application/json"`
}

type DeleteBgpPeerResponse struct {
	ContentType                  string
	DeleteBgpPeerResponse        *shared.DeleteBgpPeerResponse
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	StatusCode                   int64
}
