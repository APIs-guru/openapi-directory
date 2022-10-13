package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveFacetFromObjectHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type RemoveFacetFromObjectRequestBodyObjectReference struct {
	Selector *string `json:"Selector"`
}

type RemoveFacetFromObjectRequestBodySchemaFacet struct {
	FacetName *string `json:"FacetName"`
	SchemaArn *string `json:"SchemaArn"`
}

type RemoveFacetFromObjectRequestBody struct {
	ObjectReference RemoveFacetFromObjectRequestBodyObjectReference `json:"ObjectReference"`
	SchemaFacet     RemoveFacetFromObjectRequestBodySchemaFacet     `json:"SchemaFacet"`
}

type RemoveFacetFromObjectRequest struct {
	Headers RemoveFacetFromObjectHeaders
	Request RemoveFacetFromObjectRequestBody `request:"mediaType=application/json"`
}

type RemoveFacetFromObjectResponse struct {
	AccessDeniedException         *shared.AccessDeniedException
	ContentType                   string
	DirectoryNotEnabledException  *shared.DirectoryNotEnabledException
	FacetValidationException      *shared.FacetValidationException
	InternalServiceException      *shared.InternalServiceException
	InvalidArnException           *shared.InvalidArnException
	LimitExceededException        *shared.LimitExceededException
	RemoveFacetFromObjectResponse map[string]interface{}
	ResourceNotFoundException     *shared.ResourceNotFoundException
	RetryableConflictException    *shared.RetryableConflictException
	StatusCode                    int64
	ValidationException           *shared.ValidationException
}
