package shared



type CreateUpdatedImageRequest struct {
    DryRun *bool `json:"dryRun,omitempty"`
    ExistingImageName string `json:"existingImageName"`
    NewImageDescription *string `json:"newImageDescription,omitempty"`
    NewImageDisplayName *string `json:"newImageDisplayName,omitempty"`
    NewImageName string `json:"newImageName"`
    NewImageTags map[string]string `json:"newImageTags,omitempty"`
    
}

