package operations

import (
"openapi/pkg/models/shared")


type DescribeFhirDatastoreXAmzTargetEnum string

const (
    DescribeFhirDatastoreXAmzTargetEnumHealthLakeDescribeFhirDatastore DescribeFhirDatastoreXAmzTargetEnum = "HealthLake.DescribeFHIRDatastore"
)


type DescribeFhirDatastoreHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeFhirDatastoreXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeFhirDatastoreRequest struct {
    Headers DescribeFhirDatastoreHeaders 
    Request shared.DescribeFhirDatastoreRequest `request:"mediaType=application/json"`
    
}

type DescribeFhirDatastoreResponse struct {
    ContentType string 
    DescribeFhirDatastoreResponse *shared.DescribeFhirDatastoreResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

