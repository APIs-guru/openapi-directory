package operations

import (
	"openapi/pkg/models/shared"
)

type ListPolicyAttachmentsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListPolicyAttachmentsXAmzConsistencyLevelEnum string

const (
	ListPolicyAttachmentsXAmzConsistencyLevelEnumSerializable ListPolicyAttachmentsXAmzConsistencyLevelEnum = "SERIALIZABLE"
	ListPolicyAttachmentsXAmzConsistencyLevelEnumEventual     ListPolicyAttachmentsXAmzConsistencyLevelEnum = "EVENTUAL"
)

type ListPolicyAttachmentsHeaders struct {
	XAmzAlgorithm        *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256    *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential       *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate             *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken    *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature        *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders    *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzConsistencyLevel *ListPolicyAttachmentsXAmzConsistencyLevelEnum `header:"name=x-amz-consistency-level"`
	XAmzDataPartition    string                                         `header:"name=x-amz-data-partition"`
}

type ListPolicyAttachmentsRequestBodyPolicyReference struct {
	Selector *string `json:"Selector"`
}

type ListPolicyAttachmentsRequestBody struct {
	MaxResults      *int64                                          `json:"MaxResults"`
	NextToken       *string                                         `json:"NextToken"`
	PolicyReference ListPolicyAttachmentsRequestBodyPolicyReference `json:"PolicyReference"`
}

type ListPolicyAttachmentsRequest struct {
	QueryParams ListPolicyAttachmentsQueryParams
	Headers     ListPolicyAttachmentsHeaders
	Request     ListPolicyAttachmentsRequestBody `request:"mediaType=application/json"`
}

type ListPolicyAttachmentsResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	DirectoryNotEnabledException  *interface{}
	InternalServiceException      *interface{}
	InvalidArnException           *interface{}
	InvalidNextTokenException     *interface{}
	LimitExceededException        *interface{}
	ListPolicyAttachmentsResponse *shared.ListPolicyAttachmentsResponse
	NotPolicyException            *interface{}
	ResourceNotFoundException     *interface{}
	RetryableConflictException    *interface{}
	StatusCode                    int64
	ValidationException           *interface{}
}
