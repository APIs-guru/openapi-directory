package operations

import (
	"openapi/pkg/models/shared"
)

type GetHostXAmzTargetEnum string

const (
	GetHostXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHost GetHostXAmzTargetEnum = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost"
)

type GetHostHeaders struct {
	XAmzAlgorithm     *string               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string               `header:"name=X-Amz-Credential"`
	XAmzDate          *string               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetHostXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetHostRequest struct {
	Headers GetHostHeaders
	Request shared.GetHostInput `request:"mediaType=application/json"`
}

type GetHostResponse struct {
	ContentType                  string
	GetHostOutput                *shared.GetHostOutput
	ResourceNotFoundException    *interface{}
	ResourceUnavailableException *interface{}
	StatusCode                   int64
}
