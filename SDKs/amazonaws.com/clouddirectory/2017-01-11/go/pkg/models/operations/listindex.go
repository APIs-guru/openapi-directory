package operations

import (
	"openapi/pkg/models/shared"
)

type ListIndexQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListIndexXAmzConsistencyLevelEnum string

const (
	ListIndexXAmzConsistencyLevelEnumSerializable ListIndexXAmzConsistencyLevelEnum = "SERIALIZABLE"
	ListIndexXAmzConsistencyLevelEnumEventual     ListIndexXAmzConsistencyLevelEnum = "EVENTUAL"
)

type ListIndexHeaders struct {
	XAmzAlgorithm        *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256    *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential       *string                            `header:"name=X-Amz-Credential"`
	XAmzDate             *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken    *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature        *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders    *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzConsistencyLevel *ListIndexXAmzConsistencyLevelEnum `header:"name=x-amz-consistency-level"`
	XAmzDataPartition    string                             `header:"name=x-amz-data-partition"`
}

type ListIndexRequestBodyIndexReference struct {
	Selector *string `json:"Selector"`
}

type ListIndexRequestBody struct {
	IndexReference        ListIndexRequestBodyIndexReference `json:"IndexReference"`
	MaxResults            *int64                             `json:"MaxResults"`
	NextToken             *string                            `json:"NextToken"`
	RangesOnIndexedValues []shared.ObjectAttributeRange      `json:"RangesOnIndexedValues"`
}

type ListIndexRequest struct {
	QueryParams ListIndexQueryParams
	Headers     ListIndexHeaders
	Request     ListIndexRequestBody `request:"mediaType=application/json"`
}

type ListIndexResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	DirectoryNotEnabledException *interface{}
	FacetValidationException     *interface{}
	InternalServiceException     *interface{}
	InvalidArnException          *interface{}
	InvalidNextTokenException    *interface{}
	LimitExceededException       *interface{}
	ListIndexResponse            *shared.ListIndexResponse
	NotIndexException            *interface{}
	ResourceNotFoundException    *interface{}
	RetryableConflictException   *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
