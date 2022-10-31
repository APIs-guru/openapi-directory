package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEndpointsXAmzTargetEnum string

const (
	DescribeEndpointsXAmzTargetEnumDynamoDb20120810DescribeEndpoints DescribeEndpointsXAmzTargetEnum = "DynamoDB_20120810.DescribeEndpoints"
)

type DescribeEndpointsHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEndpointsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeEndpointsRequest struct {
	Headers DescribeEndpointsHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DescribeEndpointsResponse struct {
	ContentType               string
	DescribeEndpointsResponse *shared.DescribeEndpointsResponse
	StatusCode                int64
}
