package operations

import (
	"openapi/pkg/models/shared"
)

type ListNotificationChannelsQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListNotificationChannelsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListNotificationChannelsRequestBody struct {
	NextToken *string `json:"NextToken,omitempty"`
}

type ListNotificationChannelsRequest struct {
	QueryParams ListNotificationChannelsQueryParams
	Headers     ListNotificationChannelsHeaders
	Request     ListNotificationChannelsRequestBody `request:"mediaType=application/json"`
}

type ListNotificationChannelsResponse struct {
	AccessDeniedException            *interface{}
	ContentType                      string
	InternalServerException          *interface{}
	ListNotificationChannelsResponse *shared.ListNotificationChannelsResponse
	StatusCode                       int64
	ThrottlingException              *interface{}
	ValidationException              *interface{}
}
