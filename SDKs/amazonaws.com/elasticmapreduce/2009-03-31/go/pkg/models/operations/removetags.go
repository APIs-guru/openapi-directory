package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveTagsXAmzTargetEnum string

const (
	RemoveTagsXAmzTargetEnumElasticMapReduceRemoveTags RemoveTagsXAmzTargetEnum = "ElasticMapReduce.RemoveTags"
)

type RemoveTagsHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveTagsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RemoveTagsRequest struct {
	Headers RemoveTagsHeaders
	Request shared.RemoveTagsInput `request:"mediaType=application/json"`
}

type RemoveTagsResponse struct {
	ContentType             string
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	RemoveTagsOutput        map[string]interface{}
	StatusCode              int64
}
