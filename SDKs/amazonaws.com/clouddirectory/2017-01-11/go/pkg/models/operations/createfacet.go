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

type CreateFacetRequestBodyFacetStyleEnum string

const (
	CreateFacetRequestBodyFacetStyleEnumStatic  CreateFacetRequestBodyFacetStyleEnum = "STATIC"
	CreateFacetRequestBodyFacetStyleEnumDynamic CreateFacetRequestBodyFacetStyleEnum = "DYNAMIC"
)

type CreateFacetRequestBodyObjectTypeEnum string

const (
	CreateFacetRequestBodyObjectTypeEnumNode     CreateFacetRequestBodyObjectTypeEnum = "NODE"
	CreateFacetRequestBodyObjectTypeEnumLeafNode CreateFacetRequestBodyObjectTypeEnum = "LEAF_NODE"
	CreateFacetRequestBodyObjectTypeEnumPolicy   CreateFacetRequestBodyObjectTypeEnum = "POLICY"
	CreateFacetRequestBodyObjectTypeEnumIndex    CreateFacetRequestBodyObjectTypeEnum = "INDEX"
)

type CreateFacetRequestBody struct {
	Attributes []shared.FacetAttribute               `json:"Attributes"`
	FacetStyle *CreateFacetRequestBodyFacetStyleEnum `json:"FacetStyle"`
	Name       string                                `json:"Name"`
	ObjectType *CreateFacetRequestBodyObjectTypeEnum `json:"ObjectType"`
}

type CreateFacetRequest struct {
	Headers CreateFacetHeaders
	Request CreateFacetRequestBody `request:"mediaType=application/json"`
}

type CreateFacetResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	CreateFacetResponse         map[string]interface{}
	FacetAlreadyExistsException *interface{}
	FacetValidationException    *interface{}
	InternalServiceException    *interface{}
	InvalidArnException         *interface{}
	InvalidRuleException        *interface{}
	LimitExceededException      *interface{}
	ResourceNotFoundException   *interface{}
	RetryableConflictException  *interface{}
	StatusCode                  int64
	ValidationException         *interface{}
}
