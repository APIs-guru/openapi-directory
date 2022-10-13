package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeParameterGroupsXAmzTargetEnum string

const (
	DescribeParameterGroupsXAmzTargetEnumAmazonDaxv3DescribeParameterGroups DescribeParameterGroupsXAmzTargetEnum = "AmazonDAXV3.DescribeParameterGroups"
)

type DescribeParameterGroupsHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeParameterGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeParameterGroupsRequest struct {
	Headers DescribeParameterGroupsHeaders
	Request shared.DescribeParameterGroupsRequest `request:"mediaType=application/json"`
}

type DescribeParameterGroupsResponse struct {
	ContentType                          string
	DescribeParameterGroupsResponse      *shared.DescribeParameterGroupsResponse
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	ParameterGroupNotFoundFault          *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	StatusCode                           int64
}
