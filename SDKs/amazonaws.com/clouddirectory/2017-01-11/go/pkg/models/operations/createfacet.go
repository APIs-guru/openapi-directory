package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFacetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"style=simple,explode=false,name=x-amz-data-partition"`
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
	Attributes []shared.FacetAttribute               `json:"Attributes,omitempty"`
	FacetStyle *CreateFacetRequestBodyFacetStyleEnum `json:"FacetStyle,omitempty"`
	Name       string                                `json:"Name"`
	ObjectType *CreateFacetRequestBodyObjectTypeEnum `json:"ObjectType,omitempty"`
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
