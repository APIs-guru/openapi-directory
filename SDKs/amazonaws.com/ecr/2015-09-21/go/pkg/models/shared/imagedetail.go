package shared

import (
	"time"
)

type ImageDetail struct {
	ArtifactMediaType        *string                   `json:"artifactMediaType"`
	ImageDigest              *string                   `json:"imageDigest"`
	ImageManifestMediaType   *string                   `json:"imageManifestMediaType"`
	ImagePushedAt            *time.Time                `json:"imagePushedAt"`
	ImageScanFindingsSummary *ImageScanFindingsSummary `json:"imageScanFindingsSummary"`
	ImageScanStatus          *ImageScanStatus          `json:"imageScanStatus"`
	ImageSizeInBytes         *int64                    `json:"imageSizeInBytes"`
	ImageTags                []string                  `json:"imageTags"`
	RegistryID               *string                   `json:"registryId"`
	RepositoryName           *string                   `json:"repositoryName"`
}
