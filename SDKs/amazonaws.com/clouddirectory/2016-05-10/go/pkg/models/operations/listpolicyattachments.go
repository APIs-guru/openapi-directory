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
	XAmzAlgorithm        *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256    *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential       *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate             *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken    *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature        *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders    *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzConsistencyLevel *ListPolicyAttachmentsXAmzConsistencyLevelEnum `header:"style=simple,explode=false,name=x-amz-consistency-level"`
	XAmzDataPartition    string                                         `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

type ListPolicyAttachmentsRequestBodyPolicyReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type ListPolicyAttachmentsRequestBody struct {
	MaxResults      *int64                                          `json:"MaxResults,omitempty"`
	NextToken       *string                                         `json:"NextToken,omitempty"`
	PolicyReference ListPolicyAttachmentsRequestBodyPolicyReference `json:"PolicyReference"`
}

type ListPolicyAttachmentsRequest struct {
	QueryParams ListPolicyAttachmentsQueryParams
	Headers     ListPolicyAttachmentsHeaders
	Request     ListPolicyAttachmentsRequestBody `request:"mediaType=application/json"`
}

type ListPolicyAttachmentsResponse struct {
	AccessDeniedException         *shared.AccessDeniedException
	ContentType                   string
	DirectoryNotEnabledException  *shared.DirectoryNotEnabledException
	InternalServiceException      *shared.InternalServiceException
	InvalidArnException           *shared.InvalidArnException
	InvalidNextTokenException     *shared.InvalidNextTokenException
	LimitExceededException        *shared.LimitExceededException
	ListPolicyAttachmentsResponse *shared.ListPolicyAttachmentsResponse
	NotPolicyException            *shared.NotPolicyException
	ResourceNotFoundException     *shared.ResourceNotFoundException
	RetryableConflictException    *shared.RetryableConflictException
	StatusCode                    int64
	ValidationException           *shared.ValidationException
}
