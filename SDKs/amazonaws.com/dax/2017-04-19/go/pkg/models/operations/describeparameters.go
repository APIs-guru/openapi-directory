package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeParametersXAmzTargetEnum string

const (
	DescribeParametersXAmzTargetEnumAmazonDaxv3DescribeParameters DescribeParametersXAmzTargetEnum = "AmazonDAXV3.DescribeParameters"
)

type DescribeParametersHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeParametersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeParametersRequest struct {
	Headers DescribeParametersHeaders
	Request shared.DescribeParametersRequest `request:"mediaType=application/json"`
}

type DescribeParametersResponse struct {
	ContentType                          string
	DescribeParametersResponse           *shared.DescribeParametersResponse
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	ParameterGroupNotFoundFault          *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	StatusCode                           int64
}
