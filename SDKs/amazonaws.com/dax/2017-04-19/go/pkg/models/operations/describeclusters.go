package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeClustersXAmzTargetEnum string

const (
	DescribeClustersXAmzTargetEnumAmazonDaxv3DescribeClusters DescribeClustersXAmzTargetEnum = "AmazonDAXV3.DescribeClusters"
)

type DescribeClustersHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeClustersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeClustersRequest struct {
	Headers DescribeClustersHeaders
	Request shared.DescribeClustersRequest `request:"mediaType=application/json"`
}

type DescribeClustersResponse struct {
	ClusterNotFoundFault                 *interface{}
	ContentType                          string
	DescribeClustersResponse             *shared.DescribeClustersResponse
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	StatusCode                           int64
}
