package operations

import (
	"openapi/pkg/models/shared"
)

type ListDevelopmentSchemaArnsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListDevelopmentSchemaArnsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListDevelopmentSchemaArnsRequestBody struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}

type ListDevelopmentSchemaArnsRequest struct {
	QueryParams ListDevelopmentSchemaArnsQueryParams
	Headers     ListDevelopmentSchemaArnsHeaders
	Request     ListDevelopmentSchemaArnsRequestBody `request:"mediaType=application/json"`
}

type ListDevelopmentSchemaArnsResponse struct {
	AccessDeniedException             *interface{}
	ContentType                       string
	InternalServiceException          *interface{}
	InvalidArnException               *interface{}
	InvalidNextTokenException         *interface{}
	LimitExceededException            *interface{}
	ListDevelopmentSchemaArnsResponse *shared.ListDevelopmentSchemaArnsResponse
	ResourceNotFoundException         *interface{}
	RetryableConflictException        *interface{}
	StatusCode                        int64
	ValidationException               *interface{}
}
