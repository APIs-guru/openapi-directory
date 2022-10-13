package shared

import (
	"time"
)

type ReferencedImageDetail struct {
	ArtifactMediaType      *string    `json:"artifactMediaType"`
	ImageDigest            *string    `json:"imageDigest"`
	ImageManifestMediaType *string    `json:"imageManifestMediaType"`
	ImagePushedAt          *time.Time `json:"imagePushedAt"`
	ImageSizeInBytes       *int64     `json:"imageSizeInBytes"`
}
