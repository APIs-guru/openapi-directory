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
	XAmzAlgorithm        *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256    *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential       *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate             *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken    *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature        *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders    *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzConsistencyLevel *ListObjectParentsXAmzConsistencyLevelEnum `header:"name=x-amz-consistency-level"`
	XAmzDataPartition    string                                     `header:"name=x-amz-data-partition"`
}

type ListObjectParentsRequestBodyObjectReference struct {
	Selector *string `json:"Selector"`
}

type ListObjectParentsRequestBody struct {
	MaxResults      *int64                                      `json:"MaxResults"`
	NextToken       *string                                     `json:"NextToken"`
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
