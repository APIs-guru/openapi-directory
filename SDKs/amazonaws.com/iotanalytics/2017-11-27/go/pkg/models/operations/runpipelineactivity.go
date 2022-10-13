package operations

import (
	"openapi/pkg/models/shared"
)

type RunPipelineActivityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type RunPipelineActivityRequestBodyPipelineActivity struct {
	AddAttributes        *shared.AddAttributesActivity        `json:"addAttributes"`
	Channel              *shared.ChannelActivity              `json:"channel"`
	Datastore            *shared.DatastoreActivity            `json:"datastore"`
	DeviceRegistryEnrich *shared.DeviceRegistryEnrichActivity `json:"deviceRegistryEnrich"`
	DeviceShadowEnrich   *shared.DeviceShadowEnrichActivity   `json:"deviceShadowEnrich"`
	Filter               *shared.FilterActivity               `json:"filter"`
	Lambda               *shared.LambdaActivity               `json:"lambda"`
	Math                 *shared.MathActivity                 `json:"math"`
	RemoveAttributes     *shared.RemoveAttributesActivity     `json:"removeAttributes"`
	SelectAttributes     *shared.SelectAttributesActivity     `json:"selectAttributes"`
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
