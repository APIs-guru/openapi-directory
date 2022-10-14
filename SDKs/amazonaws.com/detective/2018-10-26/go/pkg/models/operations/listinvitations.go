package operations

import (
	"openapi/pkg/models/shared"
)

type ListInvitationsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListInvitationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListInvitationsRequestBody struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}

type ListInvitationsRequest struct {
	QueryParams ListInvitationsQueryParams
	Headers     ListInvitationsHeaders
	Request     ListInvitationsRequestBody `request:"mediaType=application/json"`
}

type ListInvitationsResponse struct {
	ContentType             string
	InternalServerException *interface{}
	ListInvitationsResponse *shared.ListInvitationsResponse
	StatusCode              int64
	ValidationException     *interface{}
}
