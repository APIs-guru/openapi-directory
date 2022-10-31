package operations

import (
"openapi/pkg/models/shared")

type ListStudiosQueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    
}


type ListStudiosXAmzTargetEnum string

const (
    ListStudiosXAmzTargetEnumElasticMapReduceListStudios ListStudiosXAmzTargetEnum = "ElasticMapReduce.ListStudios"
)


type ListStudiosHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListStudiosXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListStudiosRequest struct {
    QueryParams ListStudiosQueryParams 
    Headers ListStudiosHeaders 
    Request shared.ListStudiosInput `request:"mediaType=application/json"`
    
}

type ListStudiosResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    ListStudiosOutput *shared.ListStudiosOutput 
    StatusCode int64 
    
}

