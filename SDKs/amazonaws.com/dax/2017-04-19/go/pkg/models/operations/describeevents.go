package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEventsXAmzTargetEnum string

const (
	DescribeEventsXAmzTargetEnumAmazonDaxv3DescribeEvents DescribeEventsXAmzTargetEnum = "AmazonDAXV3.DescribeEvents"
)

type DescribeEventsHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEventsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeEventsRequest struct {
	Headers DescribeEventsHeaders
	Request shared.DescribeEventsRequest `request:"mediaType=application/json"`
}

type DescribeEventsResponse struct {
	ContentType                          string
	DescribeEventsResponse               *shared.DescribeEventsResponse
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	StatusCode                           int64
}
