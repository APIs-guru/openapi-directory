package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePresetHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreatePresetRequestBodyAudio struct {
	AudioPackingMode *string                   `json:"AudioPackingMode,omitempty"`
	BitRate          *string                   `json:"BitRate,omitempty"`
	Channels         *string                   `json:"Channels,omitempty"`
	Codec            *string                   `json:"Codec,omitempty"`
	CodecOptions     *shared.AudioCodecOptions `json:"CodecOptions,omitempty"`
	SampleRate       *string                   `json:"SampleRate,omitempty"`
}

type CreatePresetRequestBodyThumbnails struct {
	AspectRatio   *string `json:"AspectRatio,omitempty"`
	Format        *string `json:"Format,omitempty"`
	Interval      *string `json:"Interval,omitempty"`
	MaxHeight     *string `json:"MaxHeight,omitempty"`
	MaxWidth      *string `json:"MaxWidth,omitempty"`
	PaddingPolicy *string `json:"PaddingPolicy,omitempty"`
	Resolution    *string `json:"Resolution,omitempty"`
	SizingPolicy  *string `json:"SizingPolicy,omitempty"`
}

type CreatePresetRequestBodyVideo struct {
	AspectRatio        *string                  `json:"AspectRatio,omitempty"`
	BitRate            *string                  `json:"BitRate,omitempty"`
	Codec              *string                  `json:"Codec,omitempty"`
	CodecOptions       map[string]string        `json:"CodecOptions,omitempty"`
	DisplayAspectRatio *string                  `json:"DisplayAspectRatio,omitempty"`
	FixedGop           *string                  `json:"FixedGOP,omitempty"`
	FrameRate          *string                  `json:"FrameRate,omitempty"`
	KeyframesMaxDist   *string                  `json:"KeyframesMaxDist,omitempty"`
	MaxFrameRate       *string                  `json:"MaxFrameRate,omitempty"`
	MaxHeight          *string                  `json:"MaxHeight,omitempty"`
	MaxWidth           *string                  `json:"MaxWidth,omitempty"`
	PaddingPolicy      *string                  `json:"PaddingPolicy,omitempty"`
	Resolution         *string                  `json:"Resolution,omitempty"`
	SizingPolicy       *string                  `json:"SizingPolicy,omitempty"`
	Watermarks         []shared.PresetWatermark `json:"Watermarks,omitempty"`
}

type CreatePresetRequestBody struct {
	Audio       *CreatePresetRequestBodyAudio      `json:"Audio,omitempty"`
	Container   string                             `json:"Container"`
	Description *string                            `json:"Description,omitempty"`
	Name        string                             `json:"Name"`
	Thumbnails  *CreatePresetRequestBodyThumbnails `json:"Thumbnails,omitempty"`
	Video       *CreatePresetRequestBodyVideo      `json:"Video,omitempty"`
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
