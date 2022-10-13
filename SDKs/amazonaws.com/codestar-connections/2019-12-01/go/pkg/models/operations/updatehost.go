package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateHostXAmzTargetEnum string

const (
	UpdateHostXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHost UpdateHostXAmzTargetEnum = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost"
)

type UpdateHostHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateHostXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateHostRequest struct {
	Headers UpdateHostHeaders
	Request shared.UpdateHostInput `request:"mediaType=application/json"`
}

type UpdateHostResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	ResourceNotFoundException     *interface{}
	ResourceUnavailableException  *interface{}
	StatusCode                    int64
	UnsupportedOperationException *interface{}
	UpdateHostOutput              map[string]interface{}
}
