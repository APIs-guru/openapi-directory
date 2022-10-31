package operations

import (
"openapi/pkg/models/shared")


type ListDomainConfigurationsServiceTypeEnum string

const (
    ListDomainConfigurationsServiceTypeEnumData ListDomainConfigurationsServiceTypeEnum = "DATA"
ListDomainConfigurationsServiceTypeEnumCredentialProvider ListDomainConfigurationsServiceTypeEnum = "CREDENTIAL_PROVIDER"
ListDomainConfigurationsServiceTypeEnumJobs ListDomainConfigurationsServiceTypeEnum = "JOBS"
)


type ListDomainConfigurationsQueryParams struct {
    Marker *string `queryParam:"style=form,explode=true,name=marker"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    ServiceType *ListDomainConfigurationsServiceTypeEnum `queryParam:"style=form,explode=true,name=serviceType"`
    
}

type ListDomainConfigurationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListDomainConfigurationsRequest struct {
    QueryParams ListDomainConfigurationsQueryParams 
    Headers ListDomainConfigurationsHeaders 
    
}

type ListDomainConfigurationsResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ListDomainConfigurationsResponse *shared.ListDomainConfigurationsResponse 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    
}

