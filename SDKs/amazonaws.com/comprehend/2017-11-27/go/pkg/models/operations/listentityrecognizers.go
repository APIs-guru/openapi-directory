package operations

import (
"openapi/pkg/models/shared")

type ListEntityRecognizersQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListEntityRecognizersXAmzTargetEnum string

const (
    ListEntityRecognizersXAmzTargetEnumComprehend20171127ListEntityRecognizers ListEntityRecognizersXAmzTargetEnum = "Comprehend_20171127.ListEntityRecognizers"
)


type ListEntityRecognizersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListEntityRecognizersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListEntityRecognizersRequest struct {
    QueryParams ListEntityRecognizersQueryParams 
    Headers ListEntityRecognizersHeaders 
    Request shared.ListEntityRecognizersRequest `request:"mediaType=application/json"`
    
}

type ListEntityRecognizersResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidFilterException *interface{} 
    InvalidRequestException *interface{} 
    ListEntityRecognizersResponse *shared.ListEntityRecognizersResponse 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

