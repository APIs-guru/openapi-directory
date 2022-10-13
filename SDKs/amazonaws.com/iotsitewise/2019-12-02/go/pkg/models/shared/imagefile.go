package shared

type ImageFile struct {
	Data string            `json:"data"`
	Type ImageFileTypeEnum `json:"type"`
}
