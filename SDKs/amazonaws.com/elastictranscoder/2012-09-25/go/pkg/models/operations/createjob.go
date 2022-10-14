package operations

import (
	"openapi/pkg/models/shared"
)

type CreateJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateJobRequestBodyInput struct {
	AspectRatio        *string                    `json:"AspectRatio,omitempty"`
	Container          *string                    `json:"Container,omitempty"`
	DetectedProperties *shared.DetectedProperties `json:"DetectedProperties,omitempty"`
	Encryption         *shared.Encryption         `json:"Encryption,omitempty"`
	FrameRate          *string                    `json:"FrameRate,omitempty"`
	InputCaptions      *shared.InputCaptions      `json:"InputCaptions,omitempty"`
	Interlaced         *string                    `json:"Interlaced,omitempty"`
	Key                *string                    `json:"Key,omitempty"`
	Resolution         *string                    `json:"Resolution,omitempty"`
	TimeSpan           *shared.TimeSpan           `json:"TimeSpan,omitempty"`
}

type CreateJobRequestBodyOutput struct {
	AlbumArt            *shared.JobAlbumArt   `json:"AlbumArt,omitempty"`
	Captions            *shared.Captions      `json:"Captions,omitempty"`
	Composition         []shared.Clip         `json:"Composition,omitempty"`
	Encryption          *shared.Encryption    `json:"Encryption,omitempty"`
	Key                 *string               `json:"Key,omitempty"`
	PresetID            *string               `json:"PresetId,omitempty"`
	Rotate              *string               `json:"Rotate,omitempty"`
	SegmentDuration     *string               `json:"SegmentDuration,omitempty"`
	ThumbnailEncryption *shared.Encryption    `json:"ThumbnailEncryption,omitempty"`
	ThumbnailPattern    *string               `json:"ThumbnailPattern,omitempty"`
	Watermarks          []shared.JobWatermark `json:"Watermarks,omitempty"`
}

type CreateJobRequestBody struct {
	Input           *CreateJobRequestBodyInput  `json:"Input,omitempty"`
	Inputs          []shared.JobInput           `json:"Inputs,omitempty"`
	Output          *CreateJobRequestBodyOutput `json:"Output,omitempty"`
	OutputKeyPrefix *string                     `json:"OutputKeyPrefix,omitempty"`
	Outputs         []shared.CreateJobOutput    `json:"Outputs,omitempty"`
	PipelineID      string                      `json:"PipelineId"`
	Playlists       []shared.CreateJobPlaylist  `json:"Playlists,omitempty"`
	UserMetadata    map[string]string           `json:"UserMetadata,omitempty"`
}

type CreateJobRequest struct {
	Headers CreateJobHeaders
	Request CreateJobRequestBody `request:"mediaType=application/json"`
}

type CreateJobResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	CreateJobResponse            *shared.CreateJobResponse
	IncompatibleVersionException *interface{}
	InternalServiceException     *interface{}
	LimitExceededException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
