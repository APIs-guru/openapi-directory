package operations

import (
"openapi/pkg/models/shared")


type GetObjectAttributesXAmzConsistencyLevelEnum string

const (
    GetObjectAttributesXAmzConsistencyLevelEnumSerializable GetObjectAttributesXAmzConsistencyLevelEnum = "SERIALIZABLE"
GetObjectAttributesXAmzConsistencyLevelEnumEventual GetObjectAttributesXAmzConsistencyLevelEnum = "EVENTUAL"
)


type GetObjectAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzConsistencyLevel *GetObjectAttributesXAmzConsistencyLevelEnum `header:"style=simple,explode=false,name=x-amz-consistency-level"`
    XAmzDataPartition string `header:"style=simple,explode=false,name=x-amz-data-partition"`
    
}

type GetObjectAttributesRequestBodyObjectReference struct {
    Selector *string `json:"Selector,omitempty"`
    
}

type GetObjectAttributesRequestBodySchemaFacet struct {
    FacetName *string `json:"FacetName,omitempty"`
    SchemaArn *string `json:"SchemaArn,omitempty"`
    
}

type GetObjectAttributesRequestBody struct {
    AttributeNames []string `json:"AttributeNames"`
    ObjectReference GetObjectAttributesRequestBodyObjectReference `json:"ObjectReference"`
    SchemaFacet GetObjectAttributesRequestBodySchemaFacet `json:"SchemaFacet"`
    
}

type GetObjectAttributesRequest struct {
    Headers GetObjectAttributesHeaders 
    Request GetObjectAttributesRequestBody `request:"mediaType=application/json"`
    
}

type GetObjectAttributesResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DirectoryNotEnabledException *interface{} 
    FacetValidationException *interface{} 
    GetObjectAttributesResponse *shared.GetObjectAttributesResponse 
    InternalServiceException *interface{} 
    InvalidArnException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    RetryableConflictException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

