package operations

import (
	"openapi/pkg/models/shared"
)

type RunPipelineActivityHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type RunPipelineActivityRequestBodyPipelineActivity struct {
	AddAttributes        *shared.AddAttributesActivity        `json:"addAttributes,omitempty"`
	Channel              *shared.ChannelActivity              `json:"channel,omitempty"`
	Datastore            *shared.DatastoreActivity            `json:"datastore,omitempty"`
	DeviceRegistryEnrich *shared.DeviceRegistryEnrichActivity `json:"deviceRegistryEnrich,omitempty"`
	DeviceShadowEnrich   *shared.DeviceShadowEnrichActivity   `json:"deviceShadowEnrich,omitempty"`
	Filter               *shared.FilterActivity               `json:"filter,omitempty"`
	Lambda               *shared.LambdaActivity               `json:"lambda,omitempty"`
	Math                 *shared.MathActivity                 `json:"math,omitempty"`
	RemoveAttributes     *shared.RemoveAttributesActivity     `json:"removeAttributes,omitempty"`
	SelectAttributes     *shared.SelectAttributesActivity     `json:"selectAttributes,omitempty"`
}

type RunPipelineActivityRequestBody struct {
	Payloads         []string                                       `json:"payloads"`
	PipelineActivity RunPipelineActivityRequestBodyPipelineActivity `json:"pipelineActivity"`
}

type RunPipelineActivityRequest struct {
	Headers RunPipelineActivityHeaders
	Request RunPipelineActivityRequestBody `request:"mediaType=application/json"`
}

type RunPipelineActivityResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	RunPipelineActivityResponse *shared.RunPipelineActivityResponse
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
}
