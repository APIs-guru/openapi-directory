package operations

import (
	"openapi/pkg/models/shared"
)

type GetAggregateResourceConfigXAmzTargetEnum string

const (
	GetAggregateResourceConfigXAmzTargetEnumStarlingDoveServiceGetAggregateResourceConfig GetAggregateResourceConfigXAmzTargetEnum = "StarlingDoveService.GetAggregateResourceConfig"
)

type GetAggregateResourceConfigHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAggregateResourceConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAggregateResourceConfigRequest struct {
	Headers GetAggregateResourceConfigHeaders
	Request shared.GetAggregateResourceConfigRequest `request:"mediaType=application/json"`
}

type GetAggregateResourceConfigResponse struct {
	ContentType                            string
	GetAggregateResourceConfigResponse     *shared.GetAggregateResourceConfigResponse
	NoSuchConfigurationAggregatorException *interface{}
	OversizedConfigurationItemException    *interface{}
	ResourceNotDiscoveredException         *interface{}
	StatusCode                             int64
	ValidationException                    *interface{}
}
