package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteStoredQueryXAmzTargetEnum string

const (
	DeleteStoredQueryXAmzTargetEnumStarlingDoveServiceDeleteStoredQuery DeleteStoredQueryXAmzTargetEnum = "StarlingDoveService.DeleteStoredQuery"
)

type DeleteStoredQueryHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteStoredQueryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteStoredQueryRequest struct {
	Headers DeleteStoredQueryHeaders
	Request shared.DeleteStoredQueryRequest `request:"mediaType=application/json"`
}

type DeleteStoredQueryResponse struct {
	ContentType               string
	DeleteStoredQueryResponse map[string]interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
