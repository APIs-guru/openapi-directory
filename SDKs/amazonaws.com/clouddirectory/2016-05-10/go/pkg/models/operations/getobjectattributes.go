package operations

import (
	"openapi/pkg/models/shared"
)

type GetObjectAttributesXAmzConsistencyLevelEnum string

const (
	GetObjectAttributesXAmzConsistencyLevelEnumSerializable GetObjectAttributesXAmzConsistencyLevelEnum = "SERIALIZABLE"
	GetObjectAttributesXAmzConsistencyLevelEnumEventual     GetObjectAttributesXAmzConsistencyLevelEnum = "EVENTUAL"
)

type GetObjectAttributesHeaders struct {
	XAmzAlgorithm        *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256    *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential       *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate             *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken    *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature        *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders    *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzConsistencyLevel *GetObjectAttributesXAmzConsistencyLevelEnum `header:"name=x-amz-consistency-level"`
	XAmzDataPartition    string                                       `header:"name=x-amz-data-partition"`
}

type GetObjectAttributesRequestBodyObjectReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type GetObjectAttributesRequestBodySchemaFacet struct {
	FacetName *string `json:"FacetName,omitempty"`
	SchemaArn *string `json:"SchemaArn,omitempty"`
}

type GetObjectAttributesRequestBody struct {
	AttributeNames  []string                                      `json:"AttributeNames"`
	ObjectReference GetObjectAttributesRequestBodyObjectReference `json:"ObjectReference"`
	SchemaFacet     GetObjectAttributesRequestBodySchemaFacet     `json:"SchemaFacet"`
}

type GetObjectAttributesRequest struct {
	Headers GetObjectAttributesHeaders
	Request GetObjectAttributesRequestBody `request:"mediaType=application/json"`
}

type GetObjectAttributesResponse struct {
	AccessDeniedException        *shared.AccessDeniedException
	ContentType                  string
	DirectoryNotEnabledException *shared.DirectoryNotEnabledException
	FacetValidationException     *shared.FacetValidationException
	GetObjectAttributesResponse  *shared.GetObjectAttributesResponse
	InternalServiceException     *shared.InternalServiceException
	InvalidArnException          *shared.InvalidArnException
	LimitExceededException       *shared.LimitExceededException
	ResourceNotFoundException    *shared.ResourceNotFoundException
	RetryableConflictException   *shared.RetryableConflictException
	StatusCode                   int64
	ValidationException          *shared.ValidationException
}
