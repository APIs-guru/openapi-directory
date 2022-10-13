package operations

import (
	"openapi/pkg/models/shared"
)

type CreateHostXAmzTargetEnum string

const (
	CreateHostXAmzTargetEnumComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHost CreateHostXAmzTargetEnum = "com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost"
)

type CreateHostHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateHostXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateHostRequest struct {
	Headers CreateHostHeaders
	Request shared.CreateHostInput `request:"mediaType=application/json"`
}

type CreateHostResponse struct {
	ContentType            string
	CreateHostOutput       *shared.CreateHostOutput
	LimitExceededException *interface{}
	StatusCode             int64
}
