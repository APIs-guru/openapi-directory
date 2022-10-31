package operations

import (
	"openapi/pkg/models/shared"
)

type AddTagsXAmzTargetEnum string

const (
	AddTagsXAmzTargetEnumElasticMapReduceAddTags AddTagsXAmzTargetEnum = "ElasticMapReduce.AddTags"
)

type AddTagsHeaders struct {
	XAmzAlgorithm     *string               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AddTagsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AddTagsRequest struct {
	Headers AddTagsHeaders
	Request shared.AddTagsInput `request:"mediaType=application/json"`
}

type AddTagsResponse struct {
	AddTagsOutput           map[string]interface{}
	ContentType             string
	InternalServerException *interface{}
	InvalidRequestException *interface{}
	StatusCode              int64
}
