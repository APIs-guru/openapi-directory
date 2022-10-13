package shared

type CreateUpdatedImageRequest struct {
	DryRun              *bool             `json:"dryRun"`
	ExistingImageName   string            `json:"existingImageName"`
	NewImageDescription *string           `json:"newImageDescription"`
	NewImageDisplayName *string           `json:"newImageDisplayName"`
	NewImageName        string            `json:"newImageName"`
	NewImageTags        map[string]string `json:"newImageTags"`
}
