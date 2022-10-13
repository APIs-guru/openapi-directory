package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTaskDefinitionXAmzTargetEnum string

const (
	DescribeTaskDefinitionXAmzTargetEnumAmazonEc2ContainerServiceV20141113DescribeTaskDefinition DescribeTaskDefinitionXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition"
)

type DescribeTaskDefinitionHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTaskDefinitionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeTaskDefinitionRequest struct {
	Headers DescribeTaskDefinitionHeaders
	Request shared.DescribeTaskDefinitionRequest `request:"mediaType=application/json"`
}

type DescribeTaskDefinitionResponse struct {
	ClientException                *interface{}
	ContentType                    string
	DescribeTaskDefinitionResponse *shared.DescribeTaskDefinitionResponse
	InvalidParameterException      *interface{}
	ServerException                *interface{}
	StatusCode                     int64
}
