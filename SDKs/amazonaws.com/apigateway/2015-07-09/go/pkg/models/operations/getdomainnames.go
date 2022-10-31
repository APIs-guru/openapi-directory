package operations

import (
"openapi/pkg/models/shared")

type GetDomainNamesQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Position *string `queryParam:"style=form,explode=true,name=position"`
    
}

type GetDomainNamesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDomainNamesRequest struct {
    QueryParams GetDomainNamesQueryParams 
    Headers GetDomainNamesHeaders 
    
}

type GetDomainNamesResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DomainNames *shared.DomainNames 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

