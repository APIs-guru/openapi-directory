package operations

import (
"openapi/pkg/models/shared")


type RegisterWebhookWithThirdPartyXAmzTargetEnum string

const (
    RegisterWebhookWithThirdPartyXAmzTargetEnumCodePipeline20150709RegisterWebhookWithThirdParty RegisterWebhookWithThirdPartyXAmzTargetEnum = "CodePipeline_20150709.RegisterWebhookWithThirdParty"
)


type RegisterWebhookWithThirdPartyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RegisterWebhookWithThirdPartyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RegisterWebhookWithThirdPartyRequest struct {
    Headers RegisterWebhookWithThirdPartyHeaders 
    Request shared.RegisterWebhookWithThirdPartyInput `request:"mediaType=application/json"`
    
}

type RegisterWebhookWithThirdPartyResponse struct {
    ContentType string 
    RegisterWebhookWithThirdPartyOutput map[string]interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    WebhookNotFoundException *interface{} 
    
}

