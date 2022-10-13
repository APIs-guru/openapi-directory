package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteConnectionXAmzTargetEnum string

const (
	DeleteConnectionXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteConnection DeleteConnectionXAmzTargetEnum = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection"
)

type DeleteConnectionHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteConnectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteConnectionRequest struct {
	Headers DeleteConnectionHeaders
	Request shared.DeleteConnectionInput `request:"mediaType=application/json"`
}

type DeleteConnectionResponse struct {
	ContentType               string
	DeleteConnectionOutput    map[string]interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
