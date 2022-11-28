package shared

// ImageFile
// Contains an image file.
type ImageFile struct {
	Data string            `json:"data"`
	Type ImageFileTypeEnum `json:"type"`
}
