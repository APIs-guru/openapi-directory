package operations

import (
"openapi/pkg/models/shared")

type SetV2LoggingLevelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type SetV2LoggingLevelRequestBodyLogLevelEnum string

const (
    SetV2LoggingLevelRequestBodyLogLevelEnumDebug SetV2LoggingLevelRequestBodyLogLevelEnum = "DEBUG"
SetV2LoggingLevelRequestBodyLogLevelEnumInfo SetV2LoggingLevelRequestBodyLogLevelEnum = "INFO"
SetV2LoggingLevelRequestBodyLogLevelEnumError SetV2LoggingLevelRequestBodyLogLevelEnum = "ERROR"
SetV2LoggingLevelRequestBodyLogLevelEnumWarn SetV2LoggingLevelRequestBodyLogLevelEnum = "WARN"
SetV2LoggingLevelRequestBodyLogLevelEnumDisabled SetV2LoggingLevelRequestBodyLogLevelEnum = "DISABLED"
)


type SetV2LoggingLevelRequestBodyLogTarget struct {
    TargetName *string `json:"targetName,omitempty"`
    TargetType *shared.LogTargetTypeEnum `json:"targetType,omitempty"`
    
}

type SetV2LoggingLevelRequestBody struct {
    LogLevel SetV2LoggingLevelRequestBodyLogLevelEnum `json:"logLevel"`
    LogTarget SetV2LoggingLevelRequestBodyLogTarget `json:"logTarget"`
    
}

type SetV2LoggingLevelRequest struct {
    Headers SetV2LoggingLevelHeaders 
    Request SetV2LoggingLevelRequestBody `request:"mediaType=application/json"`
    
}

type SetV2LoggingLevelResponse struct {
    ContentType string 
    InternalException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    NotConfiguredException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

