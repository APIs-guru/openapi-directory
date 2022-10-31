package operations

import (
"openapi/pkg/models/shared")

type CreateAPICachePathParams struct {
    APIID string `pathParam:"style=simple,explode=false,name=apiId"`
    
}

type CreateAPICacheHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type CreateAPICacheRequestBodyAPICachingBehaviorEnum string

const (
    CreateAPICacheRequestBodyAPICachingBehaviorEnumFullRequestCaching CreateAPICacheRequestBodyAPICachingBehaviorEnum = "FULL_REQUEST_CACHING"
CreateAPICacheRequestBodyAPICachingBehaviorEnumPerResolverCaching CreateAPICacheRequestBodyAPICachingBehaviorEnum = "PER_RESOLVER_CACHING"
)



type CreateAPICacheRequestBodyTypeEnum string

const (
    CreateAPICacheRequestBodyTypeEnumT2Small CreateAPICacheRequestBodyTypeEnum = "T2_SMALL"
CreateAPICacheRequestBodyTypeEnumT2Medium CreateAPICacheRequestBodyTypeEnum = "T2_MEDIUM"
CreateAPICacheRequestBodyTypeEnumR4Large CreateAPICacheRequestBodyTypeEnum = "R4_LARGE"
CreateAPICacheRequestBodyTypeEnumR4Xlarge CreateAPICacheRequestBodyTypeEnum = "R4_XLARGE"
CreateAPICacheRequestBodyTypeEnumR42Xlarge CreateAPICacheRequestBodyTypeEnum = "R4_2XLARGE"
CreateAPICacheRequestBodyTypeEnumR44Xlarge CreateAPICacheRequestBodyTypeEnum = "R4_4XLARGE"
CreateAPICacheRequestBodyTypeEnumR48Xlarge CreateAPICacheRequestBodyTypeEnum = "R4_8XLARGE"
CreateAPICacheRequestBodyTypeEnumSmall CreateAPICacheRequestBodyTypeEnum = "SMALL"
CreateAPICacheRequestBodyTypeEnumMedium CreateAPICacheRequestBodyTypeEnum = "MEDIUM"
CreateAPICacheRequestBodyTypeEnumLarge CreateAPICacheRequestBodyTypeEnum = "LARGE"
CreateAPICacheRequestBodyTypeEnumXlarge CreateAPICacheRequestBodyTypeEnum = "XLARGE"
CreateAPICacheRequestBodyTypeEnumLarge2X CreateAPICacheRequestBodyTypeEnum = "LARGE_2X"
CreateAPICacheRequestBodyTypeEnumLarge4X CreateAPICacheRequestBodyTypeEnum = "LARGE_4X"
CreateAPICacheRequestBodyTypeEnumLarge8X CreateAPICacheRequestBodyTypeEnum = "LARGE_8X"
CreateAPICacheRequestBodyTypeEnumLarge12X CreateAPICacheRequestBodyTypeEnum = "LARGE_12X"
)


type CreateAPICacheRequestBody struct {
    APICachingBehavior CreateAPICacheRequestBodyAPICachingBehaviorEnum `json:"apiCachingBehavior"`
    AtRestEncryptionEnabled *bool `json:"atRestEncryptionEnabled,omitempty"`
    TransitEncryptionEnabled *bool `json:"transitEncryptionEnabled,omitempty"`
    TTL int64 `json:"ttl"`
    Type CreateAPICacheRequestBodyTypeEnum `json:"type"`
    
}

type CreateAPICacheRequest struct {
    PathParams CreateAPICachePathParams 
    Headers CreateAPICacheHeaders 
    Request CreateAPICacheRequestBody `request:"mediaType=application/json"`
    
}

type CreateAPICacheResponse struct {
    BadRequestException *interface{} 
    ConcurrentModificationException *interface{} 
    ContentType string 
    CreateAPICacheResponse *shared.CreateAPICacheResponse 
    InternalFailureException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

