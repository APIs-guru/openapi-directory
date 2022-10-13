package operations

import (
	"openapi/pkg/models/shared"
)

type ListCustomRoutingPortMappingsByDestinationQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum string

const (
	ListCustomRoutingPortMappingsByDestinationXAmzTargetEnumGlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestination ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum = "GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination"
)

type ListCustomRoutingPortMappingsByDestinationHeaders struct {
	XAmzAlgorithm     *string                                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListCustomRoutingPortMappingsByDestinationRequest struct {
	QueryParams ListCustomRoutingPortMappingsByDestinationQueryParams
	Headers     ListCustomRoutingPortMappingsByDestinationHeaders
	Request     shared.ListCustomRoutingPortMappingsByDestinationRequest `request:"mediaType=application/json"`
}

type ListCustomRoutingPortMappingsByDestinationResponse struct {
	ContentType                                        string
	EndpointNotFoundException                          *interface{}
	InternalServiceErrorException                      *interface{}
	InvalidArgumentException                           *interface{}
	InvalidNextTokenException                          *interface{}
	ListCustomRoutingPortMappingsByDestinationResponse *shared.ListCustomRoutingPortMappingsByDestinationResponse
	StatusCode                                         int64
}
