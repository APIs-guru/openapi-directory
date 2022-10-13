package shared

type CreateUpdatedImageResult struct {
	CanUpdateImage *bool  `json:"canUpdateImage"`
	Image          *Image `json:"image"`
}
