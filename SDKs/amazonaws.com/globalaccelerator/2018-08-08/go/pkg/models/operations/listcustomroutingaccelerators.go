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
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCustomRoutingAcceleratorsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
