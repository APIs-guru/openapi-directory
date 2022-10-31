package operations

import (
	"openapi/pkg/models/shared"
)

type ListAuthorizersStatusEnum string

const (
	ListAuthorizersStatusEnumActive   ListAuthorizersStatusEnum = "ACTIVE"
	ListAuthorizersStatusEnumInactive ListAuthorizersStatusEnum = "INACTIVE"
)

type ListAuthorizersQueryParams struct {
	IsAscendingOrder *bool                      `queryParam:"style=form,explode=true,name=isAscendingOrder"`
	Marker           *string                    `queryParam:"style=form,explode=true,name=marker"`
	PageSize         *int64                     `queryParam:"style=form,explode=true,name=pageSize"`
	Status           *ListAuthorizersStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type ListAuthorizersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListAuthorizersRequest struct {
	QueryParams ListAuthorizersQueryParams
	Headers     ListAuthorizersHeaders
}

type ListAuthorizersResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ListAuthorizersResponse     *shared.ListAuthorizersResponse
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
