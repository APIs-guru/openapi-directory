package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeExclusionsXAmzTargetEnum string

const (
	DescribeExclusionsXAmzTargetEnumInspectorServiceDescribeExclusions DescribeExclusionsXAmzTargetEnum = "InspectorService.DescribeExclusions"
)

type DescribeExclusionsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeExclusionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeExclusionsRequest struct {
	Headers DescribeExclusionsHeaders
	Request shared.DescribeExclusionsRequest `request:"mediaType=application/json"`
}

type DescribeExclusionsResponse struct {
	ContentType                string
	DescribeExclusionsResponse *shared.DescribeExclusionsResponse
	InternalException          *interface{}
	InvalidInputException      *interface{}
	StatusCode                 int64
}
