package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveTagsXAmzTargetEnum string

const (
	RemoveTagsXAmzTargetEnumElasticMapReduceRemoveTags RemoveTagsXAmzTargetEnum = "ElasticMapReduce.RemoveTags"
)

type RemoveTagsHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveTagsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
