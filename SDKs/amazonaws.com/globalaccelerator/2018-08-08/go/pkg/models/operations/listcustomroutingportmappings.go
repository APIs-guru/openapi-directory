package operations

import (
	"openapi/pkg/models/shared"
)

type ListCustomRoutingPortMappingsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListCustomRoutingPortMappingsXAmzTargetEnum string

const (
	ListCustomRoutingPortMappingsXAmzTargetEnumGlobalAcceleratorV20180706ListCustomRoutingPortMappings ListCustomRoutingPortMappingsXAmzTargetEnum = "GlobalAccelerator_V20180706.ListCustomRoutingPortMappings"
)

type ListCustomRoutingPortMappingsHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCustomRoutingPortMappingsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListCustomRoutingPortMappingsRequest struct {
	QueryParams ListCustomRoutingPortMappingsQueryParams
	Headers     ListCustomRoutingPortMappingsHeaders
	Request     shared.ListCustomRoutingPortMappingsRequest `request:"mediaType=application/json"`
}

type ListCustomRoutingPortMappingsResponse struct {
	AcceleratorNotFoundException          *interface{}
	ContentType                           string
	EndpointGroupNotFoundException        *interface{}
	InternalServiceErrorException         *interface{}
	InvalidArgumentException              *interface{}
	InvalidNextTokenException             *interface{}
	ListCustomRoutingPortMappingsResponse *shared.ListCustomRoutingPortMappingsResponse
	StatusCode                            int64
}
