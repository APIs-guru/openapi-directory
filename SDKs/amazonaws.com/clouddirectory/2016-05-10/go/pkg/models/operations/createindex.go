package operations

import (
	"openapi/pkg/models/shared"
)

type CreateIndexHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type CreateIndexRequestBodyParentReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type CreateIndexRequestBody struct {
	IsUnique                    bool                                   `json:"IsUnique"`
	LinkName                    *string                                `json:"LinkName,omitempty"`
	OrderedIndexedAttributeList []shared.AttributeKey                  `json:"OrderedIndexedAttributeList"`
	ParentReference             *CreateIndexRequestBodyParentReference `json:"ParentReference,omitempty"`
}

type CreateIndexRequest struct {
	Headers CreateIndexHeaders
	Request CreateIndexRequestBody `request:"mediaType=application/json"`
}

type CreateIndexResponse struct {
	AccessDeniedException         *shared.AccessDeniedException
	ContentType                   string
	CreateIndexResponse           *shared.CreateIndexResponse
	DirectoryNotEnabledException  *shared.DirectoryNotEnabledException
	FacetValidationException      *shared.FacetValidationException
	InternalServiceException      *shared.InternalServiceException
	InvalidArnException           *shared.InvalidArnException
	LimitExceededException        *shared.LimitExceededException
	LinkNameAlreadyInUseException *shared.LinkNameAlreadyInUseException
	ResourceNotFoundException     *shared.ResourceNotFoundException
	RetryableConflictException    *shared.RetryableConflictException
	StatusCode                    int64
	UnsupportedIndexTypeException *shared.UnsupportedIndexTypeException
	ValidationException           *shared.ValidationException
}
