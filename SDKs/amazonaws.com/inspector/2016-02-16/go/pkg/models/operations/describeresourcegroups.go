package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeResourceGroupsXAmzTargetEnum string

const (
	DescribeResourceGroupsXAmzTargetEnumInspectorServiceDescribeResourceGroups DescribeResourceGroupsXAmzTargetEnum = "InspectorService.DescribeResourceGroups"
)

type DescribeResourceGroupsHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeResourceGroupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeResourceGroupsRequest struct {
	Headers DescribeResourceGroupsHeaders
	Request shared.DescribeResourceGroupsRequest `request:"mediaType=application/json"`
}

type DescribeResourceGroupsResponse struct {
	ContentType                    string
	DescribeResourceGroupsResponse *shared.DescribeResourceGroupsResponse
	InternalException              *interface{}
	InvalidInputException          *interface{}
	StatusCode                     int64
}
