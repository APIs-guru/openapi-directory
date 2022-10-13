package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePresetHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreatePresetRequestBodyAudio struct {
	AudioPackingMode *string                   `json:"AudioPackingMode"`
	BitRate          *string                   `json:"BitRate"`
	Channels         *string                   `json:"Channels"`
	Codec            *string                   `json:"Codec"`
	CodecOptions     *shared.AudioCodecOptions `json:"CodecOptions"`
	SampleRate       *string                   `json:"SampleRate"`
}

type CreatePresetRequestBodyThumbnails struct {
	AspectRatio   *string `json:"AspectRatio"`
	Format        *string `json:"Format"`
	Interval      *string `json:"Interval"`
	MaxHeight     *string `json:"MaxHeight"`
	MaxWidth      *string `json:"MaxWidth"`
	PaddingPolicy *string `json:"PaddingPolicy"`
	Resolution    *string `json:"Resolution"`
	SizingPolicy  *string `json:"SizingPolicy"`
}

type CreatePresetRequestBodyVideo struct {
	AspectRatio        *string                  `json:"AspectRatio"`
	BitRate            *string                  `json:"BitRate"`
	Codec              *string                  `json:"Codec"`
	CodecOptions       map[string]string        `json:"CodecOptions"`
	DisplayAspectRatio *string                  `json:"DisplayAspectRatio"`
	FixedGop           *string                  `json:"FixedGOP"`
	FrameRate          *string                  `json:"FrameRate"`
	KeyframesMaxDist   *string                  `json:"KeyframesMaxDist"`
	MaxFrameRate       *string                  `json:"MaxFrameRate"`
	MaxHeight          *string                  `json:"MaxHeight"`
	MaxWidth           *string                  `json:"MaxWidth"`
	PaddingPolicy      *string                  `json:"PaddingPolicy"`
	Resolution         *string                  `json:"Resolution"`
	SizingPolicy       *string                  `json:"SizingPolicy"`
	Watermarks         []shared.PresetWatermark `json:"Watermarks"`
}

type CreatePresetRequestBody struct {
	Audio       *CreatePresetRequestBodyAudio      `json:"Audio"`
	Container   string                             `json:"Container"`
	Description *string                            `json:"Description"`
	Name        string                             `json:"Name"`
	Thumbnails  *CreatePresetRequestBodyThumbnails `json:"Thumbnails"`
	Video       *CreatePresetRequestBodyVideo      `json:"Video"`
}

type CreatePresetRequest struct {
	Headers CreatePresetHeaders
	Request CreatePresetRequestBody `request:"mediaType=application/json"`
}

type CreatePresetResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	CreatePresetResponse         *shared.CreatePresetResponse
	IncompatibleVersionException *interface{}
	InternalServiceException     *interface{}
	LimitExceededException       *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
