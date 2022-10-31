package operations

import (
"openapi/pkg/models/shared")


type GetUpdateDomainEndpointOptionsActionEnum string

const (
    GetUpdateDomainEndpointOptionsActionEnumUpdateDomainEndpointOptions GetUpdateDomainEndpointOptionsActionEnum = "UpdateDomainEndpointOptions"
)


type GetUpdateDomainEndpointOptionsDomainEndpointOptions struct {
    EnforceHTTPS *bool `queryParam:"name=EnforceHTTPS"`
    TLSSecurityPolicy *shared.TLSSecurityPolicyEnum `queryParam:"name=TLSSecurityPolicy"`
    
}


type GetUpdateDomainEndpointOptionsVersionEnum string

const (
    GetUpdateDomainEndpointOptionsVersionEnumTwoThousandAndThirteen0101 GetUpdateDomainEndpointOptionsVersionEnum = "2013-01-01"
)


type GetUpdateDomainEndpointOptionsQueryParams struct {
    Action GetUpdateDomainEndpointOptionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DomainEndpointOptions GetUpdateDomainEndpointOptionsDomainEndpointOptions `queryParam:"style=form,explode=true,name=DomainEndpointOptions"`
    DomainName string `queryParam:"style=form,explode=true,name=DomainName"`
    Version GetUpdateDomainEndpointOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetUpdateDomainEndpointOptionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetUpdateDomainEndpointOptionsRequest struct {
    QueryParams GetUpdateDomainEndpointOptionsQueryParams 
    Headers GetUpdateDomainEndpointOptionsHeaders 
    
}

type GetUpdateDomainEndpointOptionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

