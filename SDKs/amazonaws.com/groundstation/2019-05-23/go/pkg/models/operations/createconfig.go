package operations

import (
	"openapi/pkg/models/shared"
)

type CreateConfigHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateConfigRequestBodyConfigData struct {
	AntennaDownlinkConfig            *shared.AntennaDownlinkConfig            `json:"antennaDownlinkConfig"`
	AntennaDownlinkDemodDecodeConfig *shared.AntennaDownlinkDemodDecodeConfig `json:"antennaDownlinkDemodDecodeConfig"`
	AntennaUplinkConfig              *shared.AntennaUplinkConfig              `json:"antennaUplinkConfig"`
	DataflowEndpointConfig           *shared.DataflowEndpointConfig           `json:"dataflowEndpointConfig"`
	S3RecordingConfig                *shared.S3RecordingConfig                `json:"s3RecordingConfig"`
	TrackingConfig                   *shared.TrackingConfig                   `json:"trackingConfig"`
	UplinkEchoConfig                 *shared.UplinkEchoConfig                 `json:"uplinkEchoConfig"`
}

type CreateConfigRequestBody struct {
	ConfigData CreateConfigRequestBodyConfigData `json:"configData"`
	Name       string                            `json:"name"`
	Tags       map[string]string                 `json:"tags"`
}

type CreateConfigRequest struct {
	Headers CreateConfigHeaders
	Request CreateConfigRequestBody `request:"mediaType=application/json"`
}

type CreateConfigResponse struct {
	ConfigIDResponse               *shared.ConfigIDResponse
	ContentType                    string
	DependencyException            *interface{}
	InvalidParameterException      *interface{}
	ResourceLimitExceededException *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
