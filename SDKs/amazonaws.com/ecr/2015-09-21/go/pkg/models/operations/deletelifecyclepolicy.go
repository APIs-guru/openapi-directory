package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLifecyclePolicyXAmzTargetEnum string

const (
	DeleteLifecyclePolicyXAmzTargetEnumAmazonEc2ContainerRegistryV20150921DeleteLifecyclePolicy DeleteLifecyclePolicyXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy"
)

type DeleteLifecyclePolicyHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteLifecyclePolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteLifecyclePolicyRequest struct {
	Headers DeleteLifecyclePolicyHeaders
	Request shared.DeleteLifecyclePolicyRequest `request:"mediaType=application/json"`
}

type DeleteLifecyclePolicyResponse struct {
	ContentType                      string
	DeleteLifecyclePolicyResponse    *shared.DeleteLifecyclePolicyResponse
	InvalidParameterException        *interface{}
	LifecyclePolicyNotFoundException *interface{}
	RepositoryNotFoundException      *interface{}
	ServerException                  *interface{}
	StatusCode                       int64
}
