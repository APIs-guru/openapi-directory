package operations

import (
	"openapi/pkg/models/shared"
)

type ListByoipCidrsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListByoipCidrsXAmzTargetEnum string

const (
	ListByoipCidrsXAmzTargetEnumGlobalAcceleratorV20180706ListByoipCidrs ListByoipCidrsXAmzTargetEnum = "GlobalAccelerator_V20180706.ListByoipCidrs"
)

type ListByoipCidrsHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListByoipCidrsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListByoipCidrsRequest struct {
	QueryParams ListByoipCidrsQueryParams
	Headers     ListByoipCidrsHeaders
	Request     shared.ListByoipCidrsRequest `request:"mediaType=application/json"`
}

type ListByoipCidrsResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	InternalServiceErrorException *interface{}
	InvalidArgumentException      *interface{}
	InvalidNextTokenException     *interface{}
	ListByoipCidrsResponse        *shared.ListByoipCidrsResponse
	StatusCode                    int64
}
