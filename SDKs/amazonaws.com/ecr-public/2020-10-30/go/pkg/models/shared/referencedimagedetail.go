package shared

import (
	"time"
)

type ReferencedImageDetail struct {
	ArtifactMediaType      *string    `json:"artifactMediaType,omitempty"`
	ImageDigest            *string    `json:"imageDigest,omitempty"`
	ImageManifestMediaType *string    `json:"imageManifestMediaType,omitempty"`
	ImagePushedAt          *time.Time `json:"imagePushedAt,omitempty"`
	ImageSizeInBytes       *int64     `json:"imageSizeInBytes,omitempty"`
}
