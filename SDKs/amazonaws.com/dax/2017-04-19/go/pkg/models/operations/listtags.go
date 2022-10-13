package operations

import (
	"openapi/pkg/models/shared"
)

type ListTagsXAmzTargetEnum string

const (
	ListTagsXAmzTargetEnumAmazonDaxv3ListTags ListTagsXAmzTargetEnum = "AmazonDAXV3.ListTags"
)

type ListTagsHeaders struct {
	XAmzAlgorithm     *string                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListTagsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListTagsRequest struct {
	Headers ListTagsHeaders
	Request shared.ListTagsRequest `request:"mediaType=application/json"`
}

type ListTagsResponse struct {
	ClusterNotFoundFault                 *interface{}
	ContentType                          string
	InvalidArnFault                      *interface{}
	InvalidClusterStateFault             *interface{}
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	ListTagsResponse                     *shared.ListTagsResponse
	ServiceLinkedRoleNotFoundFault       *interface{}
	StatusCode                           int64
}
