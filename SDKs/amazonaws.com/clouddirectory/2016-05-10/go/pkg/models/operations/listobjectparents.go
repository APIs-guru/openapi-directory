package operations

import (
	"openapi/pkg/models/shared"
)

type ListObjectParentsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListObjectParentsXAmzConsistencyLevelEnum string

const (
	ListObjectParentsXAmzConsistencyLevelEnumSerializable ListObjectParentsXAmzConsistencyLevelEnum = "SERIALIZABLE"
	ListObjectParentsXAmzConsistencyLevelEnumEventual     ListObjectParentsXAmzConsistencyLevelEnum = "EVENTUAL"
)

type ListObjectParentsHeaders struct {
	XAmzAlgorithm        *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256    *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential       *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate             *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken    *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature        *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders    *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzConsistencyLevel *ListObjectParentsXAmzConsistencyLevelEnum `header:"style=simple,explode=false,name=x-amz-consistency-level"`
	XAmzDataPartition    string                                     `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

type ListObjectParentsRequestBodyObjectReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type ListObjectParentsRequestBody struct {
	MaxResults      *int64                                      `json:"MaxResults,omitempty"`
	NextToken       *string                                     `json:"NextToken,omitempty"`
	ObjectReference ListObjectParentsRequestBodyObjectReference `json:"ObjectReference"`
}

type ListObjectParentsRequest struct {
	QueryParams ListObjectParentsQueryParams
	Headers     ListObjectParentsHeaders
	Request     ListObjectParentsRequestBody `request:"mediaType=application/json"`
}

type ListObjectParentsResponse struct {
	AccessDeniedException           *shared.AccessDeniedException
	CannotListParentOfRootException *shared.CannotListParentOfRootException
	ContentType                     string
	DirectoryNotEnabledException    *shared.DirectoryNotEnabledException
	InternalServiceException        *shared.InternalServiceException
	InvalidArnException             *shared.InvalidArnException
	InvalidNextTokenException       *shared.InvalidNextTokenException
	LimitExceededException          *shared.LimitExceededException
	ListObjectParentsResponse       *shared.ListObjectParentsResponse
	ResourceNotFoundException       *shared.ResourceNotFoundException
	RetryableConflictException      *shared.RetryableConflictException
	StatusCode                      int64
	ValidationException             *shared.ValidationException
}
