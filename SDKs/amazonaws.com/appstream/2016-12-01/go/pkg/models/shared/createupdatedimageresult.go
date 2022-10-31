package shared



type CreateUpdatedImageResult struct {
    CanUpdateImage *bool `json:"canUpdateImage,omitempty"`
    Image *Image `json:"image,omitempty"`
    
}

