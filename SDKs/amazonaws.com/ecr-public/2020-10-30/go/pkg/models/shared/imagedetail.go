package shared

import (
	"time"
)

type ImageDetail struct {
	ArtifactMediaType      *string    `json:"artifactMediaType,omitempty"`
	ImageDigest            *string    `json:"imageDigest,omitempty"`
	ImageManifestMediaType *string    `json:"imageManifestMediaType,omitempty"`
	ImagePushedAt          *time.Time `json:"imagePushedAt,omitempty"`
	ImageSizeInBytes       *int64     `json:"imageSizeInBytes,omitempty"`
	ImageTags              []string   `json:"imageTags,omitempty"`
	RegistryID             *string    `json:"registryId,omitempty"`
	RepositoryName         *string    `json:"repositoryName,omitempty"`
}
