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
	AccessDeniedException        *interface{}
	ContentType                  string
	DirectoryNotEnabledException *interface{}
	InternalServiceException     *interface{}
	InvalidArnException          *interface{}
	InvalidNextTokenException    *interface{}
	LimitExceededException       *interface{}
	ListObjectPoliciesResponse   *shared.ListObjectPoliciesResponse
	ResourceNotFoundException    *interface{}
	RetryableConflictException   *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
