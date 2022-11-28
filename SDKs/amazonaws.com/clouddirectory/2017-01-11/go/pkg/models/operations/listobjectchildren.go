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
	XAmzAlgorithm        *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256    *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential       *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate             *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken    *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature        *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders    *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzConsistencyLevel *ListObjectChildrenXAmzConsistencyLevelEnum `header:"style=simple,explode=false,name=x-amz-consistency-level"`
	XAmzDataPartition    string                                      `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

// ListObjectChildrenRequestBodyObjectReference
// The reference that identifies an object.
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
	AccessDeniedException        *interface{}
	ContentType                  string
	DirectoryNotEnabledException *interface{}
	InternalServiceException     *interface{}
	InvalidArnException          *interface{}
	InvalidNextTokenException    *interface{}
	LimitExceededException       *interface{}
	ListObjectChildrenResponse   *shared.ListObjectChildrenResponse
	NotNodeException             *interface{}
	ResourceNotFoundException    *interface{}
	RetryableConflictException   *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
