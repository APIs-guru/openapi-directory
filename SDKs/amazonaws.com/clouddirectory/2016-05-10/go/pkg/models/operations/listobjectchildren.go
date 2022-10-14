package operations

import (
	"openapi/pkg/models/shared"
)

type ListObjectChildrenQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListObjectChildrenXAmzConsistencyLevelEnum string

const (
	ListObjectChildrenXAmzConsistencyLevelEnumSerializable ListObjectChildrenXAmzConsistencyLevelEnum = "SERIALIZABLE"
	ListObjectChildrenXAmzConsistencyLevelEnumEventual     ListObjectChildrenXAmzConsistencyLevelEnum = "EVENTUAL"
)

type ListObjectChildrenHeaders struct {
	XAmzAlgorithm        *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256    *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential       *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate             *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken    *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature        *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders    *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzConsistencyLevel *ListObjectChildrenXAmzConsistencyLevelEnum `header:"name=x-amz-consistency-level"`
	XAmzDataPartition    string                                      `header:"name=x-amz-data-partition"`
}

type ListObjectChildrenRequestBodyObjectReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type ListObjectChildrenRequestBody struct {
	MaxResults      *int64                                       `json:"MaxResults,omitempty"`
	NextToken       *string                                      `json:"NextToken,omitempty"`
	ObjectReference ListObjectChildrenRequestBodyObjectReference `json:"ObjectReference"`
}

type ListObjectChildrenRequest struct {
	QueryParams ListObjectChildrenQueryParams
	Headers     ListObjectChildrenHeaders
	Request     ListObjectChildrenRequestBody `request:"mediaType=application/json"`
}

type ListObjectChildrenResponse struct {
	AccessDeniedException        *shared.AccessDeniedException
	ContentType                  string
	DirectoryNotEnabledException *shared.DirectoryNotEnabledException
	InternalServiceException     *shared.InternalServiceException
	InvalidArnException          *shared.InvalidArnException
	InvalidNextTokenException    *shared.InvalidNextTokenException
	LimitExceededException       *shared.LimitExceededException
	ListObjectChildrenResponse   *shared.ListObjectChildrenResponse
	NotNodeException             *shared.NotNodeException
	ResourceNotFoundException    *shared.ResourceNotFoundException
	RetryableConflictException   *shared.RetryableConflictException
	StatusCode                   int64
	ValidationException          *shared.ValidationException
}
