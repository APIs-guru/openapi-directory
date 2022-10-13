package operations

import (
	"openapi/pkg/models/shared"
)

type ListNotificationRulesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListNotificationRulesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListNotificationRulesRequestBody struct {
	Filters    []shared.ListNotificationRulesFilter `json:"Filters"`
	MaxResults *int64                               `json:"MaxResults"`
	NextToken  *string                              `json:"NextToken"`
}

type ListNotificationRulesRequest struct {
	QueryParams ListNotificationRulesQueryParams
	Headers     ListNotificationRulesHeaders
	Request     ListNotificationRulesRequestBody `request:"mediaType=application/json"`
}

type ListNotificationRulesResponse struct {
	ContentType                 string
	InvalidNextTokenException   *interface{}
	ListNotificationRulesResult *shared.ListNotificationRulesResult
	StatusCode                  int64
	ValidationException         *interface{}
}
