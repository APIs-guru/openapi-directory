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
	XAmzAlgorithm        *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256    *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential       *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate             *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken    *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature        *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders    *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzConsistencyLevel *GetObjectInformationXAmzConsistencyLevelEnum `header:"name=x-amz-consistency-level"`
	XAmzDataPartition    string                                        `header:"name=x-amz-data-partition"`
}

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
