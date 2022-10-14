package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFacetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type CreateFacetRequestBodyObjectTypeEnum string

const (
	CreateFacetRequestBodyObjectTypeEnumNode     CreateFacetRequestBodyObjectTypeEnum = "NODE"
	CreateFacetRequestBodyObjectTypeEnumLeafNode CreateFacetRequestBodyObjectTypeEnum = "LEAF_NODE"
	CreateFacetRequestBodyObjectTypeEnumPolicy   CreateFacetRequestBodyObjectTypeEnum = "POLICY"
	CreateFacetRequestBodyObjectTypeEnumIndex    CreateFacetRequestBodyObjectTypeEnum = "INDEX"
)

type CreateFacetRequestBody struct {
	Attributes []shared.FacetAttribute              `json:"Attributes,omitempty"`
	Name       string                               `json:"Name"`
	ObjectType CreateFacetRequestBodyObjectTypeEnum `json:"ObjectType"`
}

type CreateFacetRequest struct {
	Headers CreateFacetHeaders
	Request CreateFacetRequestBody `request:"mediaType=application/json"`
}

type CreateFacetResponse struct {
	AccessDeniedException       *shared.AccessDeniedException
	ContentType                 string
	CreateFacetResponse         map[string]interface{}
	FacetAlreadyExistsException *shared.FacetAlreadyExistsException
	FacetValidationException    *shared.FacetValidationException
	InternalServiceException    *shared.InternalServiceException
	InvalidArnException         *shared.InvalidArnException
	InvalidRuleException        *shared.InvalidRuleException
	LimitExceededException      *shared.LimitExceededException
	ResourceNotFoundException   *shared.ResourceNotFoundException
	RetryableConflictException  *shared.RetryableConflictException
	StatusCode                  int64
	ValidationException         *shared.ValidationException
}
