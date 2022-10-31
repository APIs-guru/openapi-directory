package operations

import (
	"openapi/pkg/models/shared"
)

type GetConfigConfigTypeEnum string

const (
	GetConfigConfigTypeEnumAntennaDownlink            GetConfigConfigTypeEnum = "antenna-downlink"
	GetConfigConfigTypeEnumAntennaDownlinkDemodDecode GetConfigConfigTypeEnum = "antenna-downlink-demod-decode"
	GetConfigConfigTypeEnumAntennaUplink              GetConfigConfigTypeEnum = "antenna-uplink"
	GetConfigConfigTypeEnumDataflowEndpoint           GetConfigConfigTypeEnum = "dataflow-endpoint"
	GetConfigConfigTypeEnumTracking                   GetConfigConfigTypeEnum = "tracking"
	GetConfigConfigTypeEnumUplinkEcho                 GetConfigConfigTypeEnum = "uplink-echo"
	GetConfigConfigTypeEnumS3Recording                GetConfigConfigTypeEnum = "s3-recording"
)

type GetConfigPathParams struct {
	ConfigID   string                  `pathParam:"style=simple,explode=false,name=configId"`
	ConfigType GetConfigConfigTypeEnum `pathParam:"style=simple,explode=false,name=configType"`
}

type GetConfigHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetConfigRequest struct {
	PathParams GetConfigPathParams
	Headers    GetConfigHeaders
}

type GetConfigResponse struct {
	ContentType               string
	DependencyException       *interface{}
	GetConfigResponse         *shared.GetConfigResponse
	InvalidParameterException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
