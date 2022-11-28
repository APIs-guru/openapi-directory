package operations

import (
	"openapi/pkg/models/shared"
)

type ListObjectPoliciesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListObjectPoliciesXAmzConsistencyLevelEnum string

const (
	ListObjectPoliciesXAmzConsistencyLevelEnumSerializable ListObjectPoliciesXAmzConsistencyLevelEnum = "SERIALIZABLE"
	ListObjectPoliciesXAmzConsistencyLevelEnumEventual     ListObjectPoliciesXAmzConsistencyLevelEnum = "EVENTUAL"
)

type ListObjectPoliciesHeaders struct {
	XAmzAlgorithm        *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256    *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential       *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate             *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken    *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature        *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders    *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzConsistencyLevel *ListObjectPoliciesXAmzConsistencyLevelEnum `header:"style=simple,explode=false,name=x-amz-consistency-level"`
	XAmzDataPartition    string                                      `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

// ListObjectPoliciesRequestBodyObjectReference
// The reference that identifies an object.
type ListObjectPoliciesRequestBodyObjectReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type ListObjectPoliciesRequestBody struct {
	MaxResults      *int64                                       `json:"MaxResults,omitempty"`
	NextToken       *string                                      `json:"NextToken,omitempty"`
	ObjectReference ListObjectPoliciesRequestBodyObjectReference `json:"ObjectReference"`
}

type ListObjectPoliciesRequest struct {
	QueryParams ListObjectPoliciesQueryParams
	Headers     ListObjectPoliciesHeaders
	Request     ListObjectPoliciesRequestBody `request:"mediaType=application/json"`
}

type ListObjectPoliciesResponse struct {
	AccessDeniedException        *shared.AccessDeniedException
	ContentType                  string
	DirectoryNotEnabledException *shared.DirectoryNotEnabledException
	InternalServiceException     *shared.InternalServiceException
	InvalidArnException          *shared.InvalidArnException
	InvalidNextTokenException    *shared.InvalidNextTokenException
	LimitExceededException       *shared.LimitExceededException
	ListObjectPoliciesResponse   *shared.ListObjectPoliciesResponse
	ResourceNotFoundException    *shared.ResourceNotFoundException
	RetryableConflictException   *shared.RetryableConflictException
	StatusCode                   int64
	ValidationException          *shared.ValidationException
}
