package operations

import (
	"openapi/pkg/models/shared"
)

type GetStoredQueryXAmzTargetEnum string

const (
	GetStoredQueryXAmzTargetEnumStarlingDoveServiceGetStoredQuery GetStoredQueryXAmzTargetEnum = "StarlingDoveService.GetStoredQuery"
)

type GetStoredQueryHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetStoredQueryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
