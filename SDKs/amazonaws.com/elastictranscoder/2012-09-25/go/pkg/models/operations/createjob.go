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
	AspectRatio        *string                    `json:"AspectRatio"`
	Container          *string                    `json:"Container"`
	DetectedProperties *shared.DetectedProperties `json:"DetectedProperties"`
	Encryption         *shared.Encryption         `json:"Encryption"`
	FrameRate          *string                    `json:"FrameRate"`
	InputCaptions      *shared.InputCaptions      `json:"InputCaptions"`
	Interlaced         *string                    `json:"Interlaced"`
	Key                *string                    `json:"Key"`
	Resolution         *string                    `json:"Resolution"`
	TimeSpan           *shared.TimeSpan           `json:"TimeSpan"`
}

type CreateJobRequestBodyOutput struct {
	AlbumArt            *shared.JobAlbumArt   `json:"AlbumArt"`
	Captions            *shared.Captions      `json:"Captions"`
	Composition         []shared.Clip         `json:"Composition"`
	Encryption          *shared.Encryption    `json:"Encryption"`
	Key                 *string               `json:"Key"`
	PresetID            *string               `json:"PresetId"`
	Rotate              *string               `json:"Rotate"`
	SegmentDuration     *string               `json:"SegmentDuration"`
	ThumbnailEncryption *shared.Encryption    `json:"ThumbnailEncryption"`
	ThumbnailPattern    *string               `json:"ThumbnailPattern"`
	Watermarks          []shared.JobWatermark `json:"Watermarks"`
}

type CreateJobRequestBody struct {
	Input           *CreateJobRequestBodyInput  `json:"Input"`
	Inputs          []shared.JobInput           `json:"Inputs"`
	Output          *CreateJobRequestBodyOutput `json:"Output"`
	OutputKeyPrefix *string                     `json:"OutputKeyPrefix"`
	Outputs         []shared.CreateJobOutput    `json:"Outputs"`
	PipelineID      string                      `json:"PipelineId"`
	Playlists       []shared.CreateJobPlaylist  `json:"Playlists"`
	UserMetadata    map[string]string           `json:"UserMetadata"`
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
