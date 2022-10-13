package operations

import (
	"openapi/pkg/models/shared"
)

type ListCustomRoutingAcceleratorsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListCustomRoutingAcceleratorsXAmzTargetEnum string

const (
	ListCustomRoutingAcceleratorsXAmzTargetEnumGlobalAcceleratorV20180706ListCustomRoutingAccelerators ListCustomRoutingAcceleratorsXAmzTargetEnum = "GlobalAccelerator_V20180706.ListCustomRoutingAccelerators"
)

type ListCustomRoutingAcceleratorsHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCustomRoutingAcceleratorsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListCustomRoutingAcceleratorsRequest struct {
	QueryParams ListCustomRoutingAcceleratorsQueryParams
	Headers     ListCustomRoutingAcceleratorsHeaders
	Request     shared.ListCustomRoutingAcceleratorsRequest `request:"mediaType=application/json"`
}

type ListCustomRoutingAcceleratorsResponse struct {
	ContentType                           string
	InternalServiceErrorException         *interface{}
	InvalidArgumentException              *interface{}
	InvalidNextTokenException             *interface{}
	ListCustomRoutingAcceleratorsResponse *shared.ListCustomRoutingAcceleratorsResponse
	StatusCode                            int64
}
