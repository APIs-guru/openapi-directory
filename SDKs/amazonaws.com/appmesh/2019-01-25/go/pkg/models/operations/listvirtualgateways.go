package operations

import (
"openapi/pkg/models/shared")

type ListVirtualGatewaysPathParams struct {
    MeshName string `pathParam:"style=simple,explode=false,name=meshName"`
    
}

type ListVirtualGatewaysQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    MeshOwner *string `queryParam:"style=form,explode=true,name=meshOwner"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}

type ListVirtualGatewaysHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListVirtualGatewaysRequest struct {
    PathParams ListVirtualGatewaysPathParams 
    QueryParams ListVirtualGatewaysQueryParams 
    Headers ListVirtualGatewaysHeaders 
    
}

type ListVirtualGatewaysResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    ListVirtualGatewaysOutput *shared.ListVirtualGatewaysOutput 
    NotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

