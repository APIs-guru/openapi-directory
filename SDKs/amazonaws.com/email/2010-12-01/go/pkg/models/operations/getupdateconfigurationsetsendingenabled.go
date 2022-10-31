package operations




type GetUpdateConfigurationSetSendingEnabledActionEnum string

const (
    GetUpdateConfigurationSetSendingEnabledActionEnumUpdateConfigurationSetSendingEnabled GetUpdateConfigurationSetSendingEnabledActionEnum = "UpdateConfigurationSetSendingEnabled"
)



type GetUpdateConfigurationSetSendingEnabledVersionEnum string

const (
    GetUpdateConfigurationSetSendingEnabledVersionEnumTwoThousandAndTen1201 GetUpdateConfigurationSetSendingEnabledVersionEnum = "2010-12-01"
)


type GetUpdateConfigurationSetSendingEnabledQueryParams struct {
    Action GetUpdateConfigurationSetSendingEnabledActionEnum `queryParam:"style=form,explode=true,name=Action"`
    ConfigurationSetName string `queryParam:"style=form,explode=true,name=ConfigurationSetName"`
    Enabled bool `queryParam:"style=form,explode=true,name=Enabled"`
    Version GetUpdateConfigurationSetSendingEnabledVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetUpdateConfigurationSetSendingEnabledHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetUpdateConfigurationSetSendingEnabledRequest struct {
    QueryParams GetUpdateConfigurationSetSendingEnabledQueryParams 
    Headers GetUpdateConfigurationSetSendingEnabledHeaders 
    
}

type GetUpdateConfigurationSetSendingEnabledResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

