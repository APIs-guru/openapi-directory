package operations

import (
	"openapi/pkg/models/shared"
)

type GetConnectionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetConnectionsXAmzTargetEnum string

const (
	GetConnectionsXAmzTargetEnumAwsGlueGetConnections GetConnectionsXAmzTargetEnum = "AWSGlue.GetConnections"
)

type GetConnectionsHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetConnectionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetConnectionsRequest struct {
	QueryParams GetConnectionsQueryParams
	Headers     GetConnectionsHeaders
	Request     shared.GetConnectionsRequest `request:"mediaType=application/json"`
}

type GetConnectionsResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetConnectionsResponse    *shared.GetConnectionsResponse
	GlueEncryptionException   *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
