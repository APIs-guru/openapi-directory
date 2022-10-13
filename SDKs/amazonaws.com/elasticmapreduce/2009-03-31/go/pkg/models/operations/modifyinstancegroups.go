package operations

import (
	"openapi/pkg/models/shared"
)

type ModifyInstanceGroupsXAmzTargetEnum string

const (
	ModifyInstanceGroupsXAmzTargetEnumElasticMapReduceModifyInstanceGroups ModifyInstanceGroupsXAmzTargetEnum = "ElasticMapReduce.ModifyInstanceGroups"
)

type ModifyInstanceGroupsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ModifyInstanceGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ModifyInstanceGroupsRequest struct {
	Headers ModifyInstanceGroupsHeaders
	Request shared.ModifyInstanceGroupsInput `request:"mediaType=application/json"`
}

type ModifyInstanceGroupsResponse struct {
	ContentType         string
	InternalServerError *interface{}
	StatusCode          int64
}
