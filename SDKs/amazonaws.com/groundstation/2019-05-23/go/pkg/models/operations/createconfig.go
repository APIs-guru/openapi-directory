package operations

import (
	"openapi/pkg/models/shared"
)

type CreateConfigHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateConfigRequestBodyConfigData
// <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
type CreateConfigRequestBodyConfigData struct {
	AntennaDownlinkConfig            *shared.AntennaDownlinkConfig            `json:"antennaDownlinkConfig,omitempty"`
	AntennaDownlinkDemodDecodeConfig *shared.AntennaDownlinkDemodDecodeConfig `json:"antennaDownlinkDemodDecodeConfig,omitempty"`
	AntennaUplinkConfig              *shared.AntennaUplinkConfig              `json:"antennaUplinkConfig,omitempty"`
	DataflowEndpointConfig           *shared.DataflowEndpointConfig           `json:"dataflowEndpointConfig,omitempty"`
	S3RecordingConfig                *shared.S3RecordingConfig                `json:"s3RecordingConfig,omitempty"`
	TrackingConfig                   *shared.TrackingConfig                   `json:"trackingConfig,omitempty"`
	UplinkEchoConfig                 *shared.UplinkEchoConfig                 `json:"uplinkEchoConfig,omitempty"`
}

type CreateConfigRequestBody struct {
	ConfigData CreateConfigRequestBodyConfigData `json:"configData"`
	Name       string                            `json:"name"`
	Tags       map[string]string                 `json:"tags,omitempty"`
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
