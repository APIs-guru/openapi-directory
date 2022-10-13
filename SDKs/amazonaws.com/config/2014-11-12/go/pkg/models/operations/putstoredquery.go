package operations

import (
	"openapi/pkg/models/shared"
)

type PutStoredQueryXAmzTargetEnum string

const (
	PutStoredQueryXAmzTargetEnumStarlingDoveServicePutStoredQuery PutStoredQueryXAmzTargetEnum = "StarlingDoveService.PutStoredQuery"
)

type PutStoredQueryHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutStoredQueryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutStoredQueryRequest struct {
	Headers PutStoredQueryHeaders
	Request shared.PutStoredQueryRequest `request:"mediaType=application/json"`
}

type PutStoredQueryResponse struct {
	ContentType                             string
	PutStoredQueryResponse                  *shared.PutStoredQueryResponse
	ResourceConcurrentModificationException *interface{}
	StatusCode                              int64
	TooManyTagsException                    *interface{}
	ValidationException                     *interface{}
}
