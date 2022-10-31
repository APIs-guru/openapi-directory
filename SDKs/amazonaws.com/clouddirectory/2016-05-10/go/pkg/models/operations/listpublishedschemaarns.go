package operations

import (
	"openapi/pkg/models/shared"
)

type ListPublishedSchemaArnsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListPublishedSchemaArnsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListPublishedSchemaArnsRequestBody struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
	SchemaArn  *string `json:"SchemaArn,omitempty"`
}

type ListPublishedSchemaArnsRequest struct {
	QueryParams ListPublishedSchemaArnsQueryParams
	Headers     ListPublishedSchemaArnsHeaders
	Request     ListPublishedSchemaArnsRequestBody `request:"mediaType=application/json"`
}

type ListPublishedSchemaArnsResponse struct {
	AccessDeniedException           *shared.AccessDeniedException
	ContentType                     string
	InternalServiceException        *shared.InternalServiceException
	InvalidArnException             *shared.InvalidArnException
	InvalidNextTokenException       *shared.InvalidNextTokenException
	LimitExceededException          *shared.LimitExceededException
	ListPublishedSchemaArnsResponse *shared.ListPublishedSchemaArnsResponse
	ResourceNotFoundException       *shared.ResourceNotFoundException
	RetryableConflictException      *shared.RetryableConflictException
	StatusCode                      int64
	ValidationException             *shared.ValidationException
}
