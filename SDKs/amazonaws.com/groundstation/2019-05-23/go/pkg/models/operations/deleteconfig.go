package operations

import (
"openapi/pkg/models/shared")


type DeleteConfigConfigTypeEnum string

const (
    DeleteConfigConfigTypeEnumAntennaDownlink DeleteConfigConfigTypeEnum = "antenna-downlink"
DeleteConfigConfigTypeEnumAntennaDownlinkDemodDecode DeleteConfigConfigTypeEnum = "antenna-downlink-demod-decode"
DeleteConfigConfigTypeEnumAntennaUplink DeleteConfigConfigTypeEnum = "antenna-uplink"
DeleteConfigConfigTypeEnumDataflowEndpoint DeleteConfigConfigTypeEnum = "dataflow-endpoint"
DeleteConfigConfigTypeEnumTracking DeleteConfigConfigTypeEnum = "tracking"
DeleteConfigConfigTypeEnumUplinkEcho DeleteConfigConfigTypeEnum = "uplink-echo"
DeleteConfigConfigTypeEnumS3Recording DeleteConfigConfigTypeEnum = "s3-recording"
)


type DeleteConfigPathParams struct {
    ConfigID string `pathParam:"style=simple,explode=false,name=configId"`
    ConfigType DeleteConfigConfigTypeEnum `pathParam:"style=simple,explode=false,name=configType"`
    
}

type DeleteConfigHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteConfigRequest struct {
    PathParams DeleteConfigPathParams 
    Headers DeleteConfigHeaders 
    
}

type DeleteConfigResponse struct {
    ConfigIDResponse *shared.ConfigIDResponse 
    ContentType string 
    DependencyException *interface{} 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

