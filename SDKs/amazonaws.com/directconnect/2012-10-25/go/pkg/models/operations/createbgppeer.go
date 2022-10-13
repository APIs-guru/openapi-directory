package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBgpPeerXAmzTargetEnum string

const (
	CreateBgpPeerXAmzTargetEnumOvertureServiceCreateBgpPeer CreateBgpPeerXAmzTargetEnum = "OvertureService.CreateBGPPeer"
)

type CreateBgpPeerHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateBgpPeerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateBgpPeerRequest struct {
	Headers CreateBgpPeerHeaders
	Request shared.CreateBgpPeerRequest `request:"mediaType=application/json"`
}

type CreateBgpPeerResponse struct {
	ContentType                  string
	CreateBgpPeerResponse        *shared.CreateBgpPeerResponse
	DirectConnectClientException *interface{}
	DirectConnectServerException *interface{}
	StatusCode                   int64
}
