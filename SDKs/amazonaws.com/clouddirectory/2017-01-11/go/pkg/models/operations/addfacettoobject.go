package operations

import (
	"openapi/pkg/models/shared"
)

type AddFacetToObjectHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type AddFacetToObjectRequestBodyObjectReference struct {
	Selector *string `json:"Selector,omitempty"`
}

type AddFacetToObjectRequestBodySchemaFacet struct {
	FacetName *string `json:"FacetName,omitempty"`
	SchemaArn *string `json:"SchemaArn,omitempty"`
}

type AddFacetToObjectRequestBody struct {
	ObjectAttributeList []shared.AttributeKeyAndValue              `json:"ObjectAttributeList,omitempty"`
	ObjectReference     AddFacetToObjectRequestBodyObjectReference `json:"ObjectReference"`
	SchemaFacet         AddFacetToObjectRequestBodySchemaFacet     `json:"SchemaFacet"`
}

type AddFacetToObjectRequest struct {
	Headers AddFacetToObjectHeaders
	Request AddFacetToObjectRequestBody `request:"mediaType=application/json"`
}

type AddFacetToObjectResponse struct {
	AccessDeniedException        *interface{}
	AddFacetToObjectResponse     map[string]interface{}
	ContentType                  string
	DirectoryNotEnabledException *interface{}
	FacetValidationException     *interface{}
	InternalServiceException     *interface{}
	InvalidArnException          *interface{}
	LimitExceededException       *interface{}
	ResourceNotFoundException    *interface{}
	RetryableConflictException   *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
