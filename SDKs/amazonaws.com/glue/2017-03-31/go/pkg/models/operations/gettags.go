package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagsXAmzTargetEnum string

const (
	GetTagsXAmzTargetEnumAwsGlueGetTags GetTagsXAmzTargetEnum = "AWSGlue.GetTags"
)

type GetTagsHeaders struct {
	XAmzAlgorithm     *string               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetTagsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetTagsRequest struct {
	Headers GetTagsHeaders
	Request shared.GetTagsRequest `request:"mediaType=application/json"`
}

type GetTagsResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GetTagsResponse           *shared.GetTagsResponse
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
