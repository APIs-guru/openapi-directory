package operations

import (
"openapi/pkg/models/shared")


type ListCertificatesXAmzTargetEnum string

const (
    ListCertificatesXAmzTargetEnumDirectoryService20150416ListCertificates ListCertificatesXAmzTargetEnum = "DirectoryService_20150416.ListCertificates"
)


type ListCertificatesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListCertificatesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListCertificatesRequest struct {
    Headers ListCertificatesHeaders 
    Request shared.ListCertificatesRequest `request:"mediaType=application/json"`
    
}

type ListCertificatesResponse struct {
    ClientException *interface{} 
    ContentType string 
    DirectoryDoesNotExistException *interface{} 
    InvalidNextTokenException *interface{} 
    InvalidParameterException *interface{} 
    ListCertificatesResult *shared.ListCertificatesResult 
    ServiceException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

