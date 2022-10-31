package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDefaultParametersXAmzTargetEnum string

const (
	DescribeDefaultParametersXAmzTargetEnumAmazonDaxv3DescribeDefaultParameters DescribeDefaultParametersXAmzTargetEnum = "AmazonDAXV3.DescribeDefaultParameters"
)

type DescribeDefaultParametersHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDefaultParametersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeDefaultParametersRequest struct {
	Headers DescribeDefaultParametersHeaders
	Request shared.DescribeDefaultParametersRequest `request:"mediaType=application/json"`
}

type DescribeDefaultParametersResponse struct {
	ContentType                          string
	DescribeDefaultParametersResponse    *shared.DescribeDefaultParametersResponse
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	StatusCode                           int64
}
