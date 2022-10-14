package operations

import (
	"openapi/pkg/models/shared"
)

type ListObjectAttributesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListObjectAttributesXAmzConsistencyLevelEnum string

const (
	ListObjectAttributesXAmzConsistencyLevelEnumSerializable ListObjectAttributesXAmzConsistencyLevelEnum = "SERIALIZABLE"
	ListObjectAttributesXAmzConsistencyLevelEnumEventual     ListObjectAttributesXAmzConsistencyLevelEnum = "EVENTUAL"
)

type ListObjectAttributesHeaders struct {
	XAmzAlgorithm        *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256    *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential       *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate             *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken    *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature        *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders    *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzConsistencyLevel *ListObjectAttributesXAmzConsistencyLevelEnum `header:"name=x-amz-consistency-level"`
	XAmzDataPartition    string                                        `header:"name=x-amz-data-partition"`
}

type ListObjectAttributesRequestBodyFacetFilter struct {
	FacetName *string `json:"FacetName,omitempty"`
	SchemaArn *string `json:"SchemaArn,omitempty"`
}

type ListObjectAttributesRequestBodyObjectReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type ListObjectAttributesRequestBody struct {
	FacetFilter     *ListObjectAttributesRequestBodyFacetFilter    `json:"FacetFilter,omitempty"`
	MaxResults      *int64                                         `json:"MaxResults,omitempty"`
	NextToken       *string                                        `json:"NextToken,omitempty"`
	ObjectReference ListObjectAttributesRequestBodyObjectReference `json:"ObjectReference"`
}

type ListObjectAttributesRequest struct {
	QueryParams ListObjectAttributesQueryParams
	Headers     ListObjectAttributesHeaders
	Request     ListObjectAttributesRequestBody `request:"mediaType=application/json"`
}

type ListObjectAttributesResponse struct {
	AccessDeniedException        *shared.AccessDeniedException
	ContentType                  string
	DirectoryNotEnabledException *shared.DirectoryNotEnabledException
	FacetValidationException     *shared.FacetValidationException
	InternalServiceException     *shared.InternalServiceException
	InvalidArnException          *shared.InvalidArnException
	InvalidNextTokenException    *shared.InvalidNextTokenException
	LimitExceededException       *shared.LimitExceededException
	ListObjectAttributesResponse *shared.ListObjectAttributesResponse
	ResourceNotFoundException    *shared.ResourceNotFoundException
	RetryableConflictException   *shared.RetryableConflictException
	StatusCode                   int64
	ValidationException          *shared.ValidationException
}
