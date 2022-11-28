package operations

import (
	"openapi/pkg/models/shared"
)

type GetObjectInformationXAmzConsistencyLevelEnum string

const (
	GetObjectInformationXAmzConsistencyLevelEnumSerializable GetObjectInformationXAmzConsistencyLevelEnum = "SERIALIZABLE"
	GetObjectInformationXAmzConsistencyLevelEnumEventual     GetObjectInformationXAmzConsistencyLevelEnum = "EVENTUAL"
)

type GetObjectInformationHeaders struct {
	XAmzAlgorithm        *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256    *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential       *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate             *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken    *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature        *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders    *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzConsistencyLevel *GetObjectInformationXAmzConsistencyLevelEnum `header:"style=simple,explode=false,name=x-amz-consistency-level"`
	XAmzDataPartition    string                                        `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

// GetObjectInformationRequestBodyObjectReference
// The reference that identifies an object.
type GetObjectInformationRequestBodyObjectReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type GetObjectInformationRequestBody struct {
	ObjectReference GetObjectInformationRequestBodyObjectReference `json:"ObjectReference"`
}

type GetObjectInformationRequest struct {
	Headers GetObjectInformationHeaders
	Request GetObjectInformationRequestBody `request:"mediaType=application/json"`
}

type GetObjectInformationResponse struct {
	AccessDeniedException        *shared.AccessDeniedException
	ContentType                  string
	DirectoryNotEnabledException *shared.DirectoryNotEnabledException
	GetObjectInformationResponse *shared.GetObjectInformationResponse
	InternalServiceException     *shared.InternalServiceException
	InvalidArnException          *shared.InvalidArnException
	LimitExceededException       *shared.LimitExceededException
	ResourceNotFoundException    *shared.ResourceNotFoundException
	RetryableConflictException   *shared.RetryableConflictException
	StatusCode                   int64
	ValidationException          *shared.ValidationException
}
