package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRegistryXAmzTargetEnum string

const (
	DescribeRegistryXAmzTargetEnumAmazonEc2ContainerRegistryV20150921DescribeRegistry DescribeRegistryXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.DescribeRegistry"
)

type DescribeRegistryHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeRegistryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeRegistryRequest struct {
	Headers DescribeRegistryHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DescribeRegistryResponse struct {
	ContentType               string
	DescribeRegistryResponse  *shared.DescribeRegistryResponse
	InvalidParameterException *interface{}
	ServerException           *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
