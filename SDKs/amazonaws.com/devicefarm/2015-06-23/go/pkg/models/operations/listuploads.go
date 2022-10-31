package operations

import (
"openapi/pkg/models/shared")

type ListUploadsQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type ListUploadsXAmzTargetEnum string

const (
    ListUploadsXAmzTargetEnumDeviceFarm20150623ListUploads ListUploadsXAmzTargetEnum = "DeviceFarm_20150623.ListUploads"
)


type ListUploadsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListUploadsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListUploadsRequest struct {
    QueryParams ListUploadsQueryParams 
    Headers ListUploadsHeaders 
    Request shared.ListUploadsRequest `request:"mediaType=application/json"`
    
}

type ListUploadsResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    LimitExceededException *interface{} 
    ListUploadsResult *shared.ListUploadsResult 
    NotFoundException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    
}

