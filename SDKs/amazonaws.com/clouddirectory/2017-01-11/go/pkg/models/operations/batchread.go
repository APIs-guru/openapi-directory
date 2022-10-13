package operations

import (
	"openapi/pkg/models/shared"
)

type BatchReadXAmzConsistencyLevelEnum string

const (
	BatchReadXAmzConsistencyLevelEnumSerializable BatchReadXAmzConsistencyLevelEnum = "SERIALIZABLE"
	BatchReadXAmzConsistencyLevelEnumEventual     BatchReadXAmzConsistencyLevelEnum = "EVENTUAL"
)

type BatchReadHeaders struct {
	XAmzAlgorithm        *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256    *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential       *string                            `header:"name=X-Amz-Credential"`
	XAmzDate             *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken    *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature        *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders    *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzConsistencyLevel *BatchReadXAmzConsistencyLevelEnum `header:"name=x-amz-consistency-level"`
	XAmzDataPartition    string                             `header:"name=x-amz-data-partition"`
}

type BatchReadRequestBody struct {
	Operations []shared.BatchReadOperation `json:"Operations"`
}

type BatchReadRequest struct {
	Headers BatchReadHeaders
	Request BatchReadRequestBody `request:"mediaType=application/json"`
}

type BatchReadResponse struct {
	AccessDeniedException        *interface{}
	BatchReadResponse            *shared.BatchReadResponse
	ContentType                  string
	DirectoryNotEnabledException *interface{}
	InternalServiceException     *interface{}
	InvalidArnException          *interface{}
	LimitExceededException       *interface{}
	RetryableConflictException   *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
