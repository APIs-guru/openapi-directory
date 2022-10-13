package operations

import (
	"openapi/pkg/models/shared"
)

type PutRegistryPolicyXAmzTargetEnum string

const (
	PutRegistryPolicyXAmzTargetEnumAmazonEc2ContainerRegistryV20150921PutRegistryPolicy PutRegistryPolicyXAmzTargetEnum = "AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy"
)

type PutRegistryPolicyHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutRegistryPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutRegistryPolicyRequest struct {
	Headers PutRegistryPolicyHeaders
	Request shared.PutRegistryPolicyRequest `request:"mediaType=application/json"`
}

type PutRegistryPolicyResponse struct {
	ContentType               string
	InvalidParameterException *interface{}
	PutRegistryPolicyResponse *shared.PutRegistryPolicyResponse
	ServerException           *interface{}
	StatusCode                int64
}
