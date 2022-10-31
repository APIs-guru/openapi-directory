package operations

import (
"openapi/pkg/models/shared")


type DescribeLdapsSettingsXAmzTargetEnum string

const (
    DescribeLdapsSettingsXAmzTargetEnumDirectoryService20150416DescribeLdapsSettings DescribeLdapsSettingsXAmzTargetEnum = "DirectoryService_20150416.DescribeLDAPSSettings"
)


type DescribeLdapsSettingsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeLdapsSettingsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeLdapsSettingsRequest struct {
    Headers DescribeLdapsSettingsHeaders 
    Request shared.DescribeLdapsSettingsRequest `request:"mediaType=application/json"`
    
}

type DescribeLdapsSettingsResponse struct {
    ClientException *interface{} 
    ContentType string 
    DescribeLdapsSettingsResult *shared.DescribeLdapsSettingsResult 
    DirectoryDoesNotExistException *interface{} 
    InvalidNextTokenException *interface{} 
    InvalidParameterException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

