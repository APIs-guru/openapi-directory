package operations

import (
	"openapi/pkg/models/shared"
)

type GetStoredQueryXAmzTargetEnum string

const (
	GetStoredQueryXAmzTargetEnumStarlingDoveServiceGetStoredQuery GetStoredQueryXAmzTargetEnum = "StarlingDoveService.GetStoredQuery"
)

type GetStoredQueryHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetStoredQueryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetStoredQueryRequest struct {
	Headers GetStoredQueryHeaders
	Request shared.GetStoredQueryRequest `request:"mediaType=application/json"`
}

type GetStoredQueryResponse struct {
	ContentType               string
	GetStoredQueryResponse    *shared.GetStoredQueryResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
