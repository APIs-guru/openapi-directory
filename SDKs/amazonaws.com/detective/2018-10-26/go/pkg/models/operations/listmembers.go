package operations

import (
	"openapi/pkg/models/shared"
)

type ListMembersQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListMembersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListMembersRequestBody struct {
	GraphArn   string  `json:"GraphArn"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}

type ListMembersRequest struct {
	QueryParams ListMembersQueryParams
	Headers     ListMembersHeaders
	Request     ListMembersRequestBody `request:"mediaType=application/json"`
}

type ListMembersResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	ListMembersResponse       *shared.ListMembersResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
