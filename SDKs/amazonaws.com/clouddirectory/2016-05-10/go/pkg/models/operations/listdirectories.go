package operations

import (
	"openapi/pkg/models/shared"
)

type ListDirectoriesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDirectoriesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDirectoriesRequestBodyStateEnum string

const (
	ListDirectoriesRequestBodyStateEnumEnabled  ListDirectoriesRequestBodyStateEnum = "ENABLED"
	ListDirectoriesRequestBodyStateEnumDisabled ListDirectoriesRequestBodyStateEnum = "DISABLED"
	ListDirectoriesRequestBodyStateEnumDeleted  ListDirectoriesRequestBodyStateEnum = "DELETED"
)

type ListDirectoriesRequestBody struct {
	MaxResults *int64                               `json:"MaxResults,omitempty"`
	NextToken  *string                              `json:"NextToken,omitempty"`
	State      *ListDirectoriesRequestBodyStateEnum `json:"state,omitempty"`
}

type ListDirectoriesRequest struct {
	QueryParams ListDirectoriesQueryParams
	Headers     ListDirectoriesHeaders
	Request     ListDirectoriesRequestBody `request:"mediaType=application/json"`
}

type ListDirectoriesResponse struct {
	AccessDeniedException      *shared.AccessDeniedException
	ContentType                string
	InternalServiceException   *shared.InternalServiceException
	InvalidArnException        *shared.InvalidArnException
	InvalidNextTokenException  *shared.InvalidNextTokenException
	LimitExceededException     *shared.LimitExceededException
	ListDirectoriesResponse    *shared.ListDirectoriesResponse
	RetryableConflictException *shared.RetryableConflictException
	StatusCode                 int64
	ValidationException        *shared.ValidationException
}
