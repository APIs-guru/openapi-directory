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
	XAmzAlgorithm        *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256    *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential       *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate             *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken    *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature        *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders    *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzConsistencyLevel *ListAttachedIndicesXAmzConsistencyLevelEnum `header:"style=simple,explode=false,name=x-amz-consistency-level"`
	XAmzDataPartition    string                                       `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

// ListAttachedIndicesRequestBodyTargetReference
// The reference that identifies an object.
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
	AccessDeniedException        *interface{}
	ContentType                  string
	DirectoryNotEnabledException *interface{}
	InternalServiceException     *interface{}
	InvalidArnException          *interface{}
	LimitExceededException       *interface{}
	ListAttachedIndicesResponse  *shared.ListAttachedIndicesResponse
	ResourceNotFoundException    *interface{}
	RetryableConflictException   *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
