package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateConfigConfigTypeEnum string

const (
	UpdateConfigConfigTypeEnumAntennaDownlink            UpdateConfigConfigTypeEnum = "antenna-downlink"
	UpdateConfigConfigTypeEnumAntennaDownlinkDemodDecode UpdateConfigConfigTypeEnum = "antenna-downlink-demod-decode"
	UpdateConfigConfigTypeEnumAntennaUplink              UpdateConfigConfigTypeEnum = "antenna-uplink"
	UpdateConfigConfigTypeEnumDataflowEndpoint           UpdateConfigConfigTypeEnum = "dataflow-endpoint"
	UpdateConfigConfigTypeEnumTracking                   UpdateConfigConfigTypeEnum = "tracking"
	UpdateConfigConfigTypeEnumUplinkEcho                 UpdateConfigConfigTypeEnum = "uplink-echo"
	UpdateConfigConfigTypeEnumS3Recording                UpdateConfigConfigTypeEnum = "s3-recording"
)

type UpdateConfigPathParams struct {
	ConfigID   string                     `pathParam:"style=simple,explode=false,name=configId"`
	ConfigType UpdateConfigConfigTypeEnum `pathParam:"style=simple,explode=false,name=configType"`
}

type UpdateConfigHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateConfigRequestBodyConfigData struct {
	AntennaDownlinkConfig            *shared.AntennaDownlinkConfig            `json:"antennaDownlinkConfig"`
	AntennaDownlinkDemodDecodeConfig *shared.AntennaDownlinkDemodDecodeConfig `json:"antennaDownlinkDemodDecodeConfig"`
	AntennaUplinkConfig              *shared.AntennaUplinkConfig              `json:"antennaUplinkConfig"`
	DataflowEndpointConfig           *shared.DataflowEndpointConfig           `json:"dataflowEndpointConfig"`
	S3RecordingConfig                *shared.S3RecordingConfig                `json:"s3RecordingConfig"`
	TrackingConfig                   *shared.TrackingConfig                   `json:"trackingConfig"`
	UplinkEchoConfig                 *shared.UplinkEchoConfig                 `json:"uplinkEchoConfig"`
}

type UpdateConfigRequestBody struct {
	ConfigData UpdateConfigRequestBodyConfigData `json:"configData"`
	Name       string                            `json:"name"`
}

type UpdateConfigRequest struct {
	PathParams UpdateConfigPathParams
	Headers    UpdateConfigHeaders
	Request    UpdateConfigRequestBody `request:"mediaType=application/json"`
}

type UpdateConfigResponse struct {
	ConfigIDResponse          *shared.ConfigIDResponse
	ContentType               string
	DependencyException       *interface{}
	InvalidParameterException *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
