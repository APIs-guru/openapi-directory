package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFacetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"style=simple,explode=false,name=x-amz-data-partition"`
}

type UpdateFacetRequestBodyObjectTypeEnum string

const (
	UpdateFacetRequestBodyObjectTypeEnumNode     UpdateFacetRequestBodyObjectTypeEnum = "NODE"
	UpdateFacetRequestBodyObjectTypeEnumLeafNode UpdateFacetRequestBodyObjectTypeEnum = "LEAF_NODE"
	UpdateFacetRequestBodyObjectTypeEnumPolicy   UpdateFacetRequestBodyObjectTypeEnum = "POLICY"
	UpdateFacetRequestBodyObjectTypeEnumIndex    UpdateFacetRequestBodyObjectTypeEnum = "INDEX"
)

type UpdateFacetRequestBody struct {
	AttributeUpdates []shared.FacetAttributeUpdate         `json:"AttributeUpdates,omitempty"`
	Name             string                                `json:"Name"`
	ObjectType       *UpdateFacetRequestBodyObjectTypeEnum `json:"ObjectType,omitempty"`
}

type UpdateFacetRequest struct {
	Headers UpdateFacetHeaders
	Request UpdateFacetRequestBody `request:"mediaType=application/json"`
}

type UpdateFacetResponse struct {
	AccessDeniedException       *interface{}
	ContentType                 string
	FacetNotFoundException      *interface{}
	FacetValidationException    *interface{}
	InternalServiceException    *interface{}
	InvalidArnException         *interface{}
	InvalidFacetUpdateException *interface{}
	InvalidRuleException        *interface{}
	LimitExceededException      *interface{}
	ResourceNotFoundException   *interface{}
	RetryableConflictException  *interface{}
	StatusCode                  int64
	UpdateFacetResponse         map[string]interface{}
	ValidationException         *interface{}
}
