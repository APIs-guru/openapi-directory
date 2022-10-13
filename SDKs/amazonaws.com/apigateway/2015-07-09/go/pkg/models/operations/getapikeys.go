package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIKeysQueryParams struct {
	CustomerID    *string `queryParam:"style=form,explode=true,name=customerId"`
	IncludeValues *bool   `queryParam:"style=form,explode=true,name=includeValues"`
	Limit         *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name          *string `queryParam:"style=form,explode=true,name=name"`
	Position      *string `queryParam:"style=form,explode=true,name=position"`
}

type GetAPIKeysHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAPIKeysRequest struct {
	QueryParams GetAPIKeysQueryParams
	Headers     GetAPIKeysHeaders
}

type GetAPIKeysResponse struct {
	APIKeys                  *shared.APIKeys
	BadRequestException      *interface{}
	ContentType              string
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
