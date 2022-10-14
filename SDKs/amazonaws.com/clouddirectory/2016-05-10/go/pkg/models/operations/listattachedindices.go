package operations

import (
	"openapi/pkg/models/shared"
)

type ListAttachedIndicesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAttachedIndicesXAmzConsistencyLevelEnum string

const (
	ListAttachedIndicesXAmzConsistencyLevelEnumSerializable ListAttachedIndicesXAmzConsistencyLevelEnum = "SERIALIZABLE"
	ListAttachedIndicesXAmzConsistencyLevelEnumEventual     ListAttachedIndicesXAmzConsistencyLevelEnum = "EVENTUAL"
)

type ListAttachedIndicesHeaders struct {
	XAmzAlgorithm        *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256    *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential       *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate             *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken    *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature        *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders    *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzConsistencyLevel *ListAttachedIndicesXAmzConsistencyLevelEnum `header:"name=x-amz-consistency-level"`
	XAmzDataPartition    string                                       `header:"name=x-amz-data-partition"`
}

type ListAttachedIndicesRequestBodyTargetReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type ListAttachedIndicesRequestBody struct {
	MaxResults      *int64                                        `json:"MaxResults,omitempty"`
	NextToken       *string                                       `json:"NextToken,omitempty"`
	TargetReference ListAttachedIndicesRequestBodyTargetReference `json:"TargetReference"`
}

type ListAttachedIndicesRequest struct {
	QueryParams ListAttachedIndicesQueryParams
	Headers     ListAttachedIndicesHeaders
	Request     ListAttachedIndicesRequestBody `request:"mediaType=application/json"`
}

type ListAttachedIndicesResponse struct {
	AccessDeniedException        *shared.AccessDeniedException
	ContentType                  string
	DirectoryNotEnabledException *shared.DirectoryNotEnabledException
	InternalServiceException     *shared.InternalServiceException
	InvalidArnException          *shared.InvalidArnException
	LimitExceededException       *shared.LimitExceededException
	ListAttachedIndicesResponse  *shared.ListAttachedIndicesResponse
	ResourceNotFoundException    *shared.ResourceNotFoundException
	RetryableConflictException   *shared.RetryableConflictException
	StatusCode                   int64
	ValidationException          *shared.ValidationException
}
