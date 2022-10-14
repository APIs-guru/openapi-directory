package operations

import (
	"openapi/pkg/models/shared"
)

type CreateObjectHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type CreateObjectRequestBodyParentReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type CreateObjectRequestBody struct {
	LinkName            *string                                 `json:"LinkName,omitempty"`
	ObjectAttributeList []shared.AttributeKeyAndValue           `json:"ObjectAttributeList,omitempty"`
	ParentReference     *CreateObjectRequestBodyParentReference `json:"ParentReference,omitempty"`
	SchemaFacets        []shared.SchemaFacet                    `json:"SchemaFacets"`
}

type CreateObjectRequest struct {
	Headers CreateObjectHeaders
	Request CreateObjectRequestBody `request:"mediaType=application/json"`
}

type CreateObjectResponse struct {
	AccessDeniedException         *shared.AccessDeniedException
	ContentType                   string
	CreateObjectResponse          *shared.CreateObjectResponse
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
