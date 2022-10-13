package operations

import (
	"openapi/pkg/models/shared"
)

type LookupPolicyQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type LookupPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type LookupPolicyRequestBodyObjectReference struct {
	Selector *string `json:"Selector"`
}

type LookupPolicyRequestBody struct {
	MaxResults      *int64                                 `json:"MaxResults"`
	NextToken       *string                                `json:"NextToken"`
	ObjectReference LookupPolicyRequestBodyObjectReference `json:"ObjectReference"`
}

type LookupPolicyRequest struct {
	QueryParams LookupPolicyQueryParams
	Headers     LookupPolicyHeaders
	Request     LookupPolicyRequestBody `request:"mediaType=application/json"`
}

type LookupPolicyResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	DirectoryNotEnabledException *interface{}
	InternalServiceException     *interface{}
	InvalidArnException          *interface{}
	InvalidNextTokenException    *interface{}
	LimitExceededException       *interface{}
	LookupPolicyResponse         *shared.LookupPolicyResponse
	ResourceNotFoundException    *interface{}
	RetryableConflictException   *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
