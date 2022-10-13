package operations

import (
	"openapi/pkg/models/shared"
)

type GetConnectionXAmzTargetEnum string

const (
	GetConnectionXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnection GetConnectionXAmzTargetEnum = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection"
)

type GetConnectionHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetConnectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetConnectionRequest struct {
	Headers GetConnectionHeaders
	Request shared.GetConnectionInput `request:"mediaType=application/json"`
}

type GetConnectionResponse struct {
	ContentType                  string
	GetConnectionOutput          *shared.GetConnectionOutput
	ResourceNotFoundException    *interface{}
	ResourceUnavailableException *interface{}
	StatusCode                   int64
}
