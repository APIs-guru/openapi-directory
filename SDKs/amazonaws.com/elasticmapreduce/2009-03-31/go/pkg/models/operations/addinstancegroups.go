package operations

import (
	"openapi/pkg/models/shared"
)

type AddInstanceGroupsXAmzTargetEnum string

const (
	AddInstanceGroupsXAmzTargetEnumElasticMapReduceAddInstanceGroups AddInstanceGroupsXAmzTargetEnum = "ElasticMapReduce.AddInstanceGroups"
)

type AddInstanceGroupsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AddInstanceGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AddInstanceGroupsRequest struct {
	Headers AddInstanceGroupsHeaders
	Request shared.AddInstanceGroupsInput `request:"mediaType=application/json"`
}

type AddInstanceGroupsResponse struct {
	AddInstanceGroupsOutput *shared.AddInstanceGroupsOutput
	ContentType             string
	InternalServerError     *interface{}
	StatusCode              int64
}
