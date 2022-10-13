package operations

import (
	"openapi/pkg/models/shared"
)

type ListListenersQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListListenersXAmzTargetEnum string

const (
	ListListenersXAmzTargetEnumGlobalAcceleratorV20180706ListListeners ListListenersXAmzTargetEnum = "GlobalAccelerator_V20180706.ListListeners"
)

type ListListenersHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListListenersXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListListenersRequest struct {
	QueryParams ListListenersQueryParams
	Headers     ListListenersHeaders
	Request     shared.ListListenersRequest `request:"mediaType=application/json"`
}

type ListListenersResponse struct {
	AcceleratorNotFoundException  *interface{}
	ContentType                   string
	InternalServiceErrorException *interface{}
	InvalidArgumentException      *interface{}
	InvalidNextTokenException     *interface{}
	ListListenersResponse         *shared.ListListenersResponse
	StatusCode                    int64
}
