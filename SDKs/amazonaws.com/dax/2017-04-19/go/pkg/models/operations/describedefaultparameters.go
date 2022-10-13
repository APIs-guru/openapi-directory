package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDefaultParametersXAmzTargetEnum string

const (
	DescribeDefaultParametersXAmzTargetEnumAmazonDaxv3DescribeDefaultParameters DescribeDefaultParametersXAmzTargetEnum = "AmazonDAXV3.DescribeDefaultParameters"
)

type DescribeDefaultParametersHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDefaultParametersXAmzTargetEnum `header:"name=X-Amz-Target"`
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
