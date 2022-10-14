package operations

import (
	"openapi/pkg/models/shared"
)

type ListAppliedSchemaArnsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAppliedSchemaArnsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListAppliedSchemaArnsRequestBody struct {
	DirectoryArn string  `json:"DirectoryArn"`
	MaxResults   *int64  `json:"MaxResults,omitempty"`
	NextToken    *string `json:"NextToken,omitempty"`
	SchemaArn    *string `json:"SchemaArn,omitempty"`
}

type ListAppliedSchemaArnsRequest struct {
	QueryParams ListAppliedSchemaArnsQueryParams
	Headers     ListAppliedSchemaArnsHeaders
	Request     ListAppliedSchemaArnsRequestBody `request:"mediaType=application/json"`
}

type ListAppliedSchemaArnsResponse struct {
	AccessDeniedException         *shared.AccessDeniedException
	ContentType                   string
	InternalServiceException      *shared.InternalServiceException
	InvalidArnException           *shared.InvalidArnException
	InvalidNextTokenException     *shared.InvalidNextTokenException
	LimitExceededException        *shared.LimitExceededException
	ListAppliedSchemaArnsResponse *shared.ListAppliedSchemaArnsResponse
	ResourceNotFoundException     *shared.ResourceNotFoundException
	RetryableConflictException    *shared.RetryableConflictException
	StatusCode                    int64
	ValidationException           *shared.ValidationException
}
