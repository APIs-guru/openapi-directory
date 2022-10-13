package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAttributesXAmzTargetEnum string

const (
	DeleteAttributesXAmzTargetEnumAmazonEc2ContainerServiceV20141113DeleteAttributes DeleteAttributesXAmzTargetEnum = "AmazonEC2ContainerServiceV20141113.DeleteAttributes"
)

type DeleteAttributesHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAttributesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteAttributesRequest struct {
	Headers DeleteAttributesHeaders
	Request shared.DeleteAttributesRequest `request:"mediaType=application/json"`
}

type DeleteAttributesResponse struct {
	ClusterNotFoundException  *interface{}
	ContentType               string
	DeleteAttributesResponse  *shared.DeleteAttributesResponse
	InvalidParameterException *interface{}
	StatusCode                int64
	TargetNotFoundException   *interface{}
}
