package operations

import (
"openapi/pkg/models/shared")

type GetOfferingStatusQueryParams struct {
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    
}


type GetOfferingStatusXAmzTargetEnum string

const (
    GetOfferingStatusXAmzTargetEnumDeviceFarm20150623GetOfferingStatus GetOfferingStatusXAmzTargetEnum = "DeviceFarm_20150623.GetOfferingStatus"
)


type GetOfferingStatusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetOfferingStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetOfferingStatusRequest struct {
    QueryParams GetOfferingStatusQueryParams 
    Headers GetOfferingStatusHeaders 
    Request shared.GetOfferingStatusRequest `request:"mediaType=application/json"`
    
}

type GetOfferingStatusResponse struct {
    ArgumentException *interface{} 
    ContentType string 
    GetOfferingStatusResult *shared.GetOfferingStatusResult 
    LimitExceededException *interface{} 
    NotEligibleException *interface{} 
    NotFoundException *interface{} 
    ServiceAccountException *interface{} 
    StatusCode int64 
    
}

