package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteBgpPeerXAmzTargetEnum string

const (
	DeleteBgpPeerXAmzTargetEnumOvertureServiceDeleteBgpPeer DeleteBgpPeerXAmzTargetEnum = "OvertureService.DeleteBGPPeer"
)

type DeleteBgpPeerHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteBgpPeerXAmzTargetEnum `header:"name=X-Amz-Target"`
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
