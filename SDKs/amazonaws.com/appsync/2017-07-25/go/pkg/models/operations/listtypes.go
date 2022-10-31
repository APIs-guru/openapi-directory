package operations

import (
"openapi/pkg/models/shared")

type ListTypesPathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    
}


type ListTypesFormatEnum string

const (
    ListTypesFormatEnumSdl ListTypesFormatEnum = "SDL"
ListTypesFormatEnumJSON ListTypesFormatEnum = "JSON"
)


type ListTypesQueryParams struct {
    Format ListTypesFormatEnum `queryParam:"style=form,explode=true,name=format"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListTypesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListTypesRequest struct {
    PathParams ListTypesPathParams 
    QueryParams ListTypesQueryParams 
    Headers ListTypesHeaders 
    
}

type ListTypesResponse struct {
    BadRequestException *interface{} 
    ConcurrentModificationException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    ListTypesResponse *shared.ListTypesResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

