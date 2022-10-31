package operations

import (
"openapi/pkg/models/shared")

type DescribeDomainControllersQueryParams struct {
    Limit *string `queryParam:"style=form,explode=true,name=Limit"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type DescribeDomainControllersXAmzTargetEnum string

const (
    DescribeDomainControllersXAmzTargetEnumDirectoryService20150416DescribeDomainControllers DescribeDomainControllersXAmzTargetEnum = "DirectoryService_20150416.DescribeDomainControllers"
)


type DescribeDomainControllersHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeDomainControllersXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeDomainControllersRequest struct {
    QueryParams DescribeDomainControllersQueryParams 
    Headers DescribeDomainControllersHeaders 
    Request shared.DescribeDomainControllersRequest `request:"mediaType=application/json"`
    
}

type DescribeDomainControllersResponse struct {
    ClientException *interface{} 
    ContentType string 
    DescribeDomainControllersResult *shared.DescribeDomainControllersResult 
    EntityDoesNotExistException *interface{} 
    InvalidNextTokenException *interface{} 
    InvalidParameterException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

