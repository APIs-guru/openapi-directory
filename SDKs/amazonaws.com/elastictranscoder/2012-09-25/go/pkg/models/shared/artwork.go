package shared

type Artwork struct {
	AlbumArtFormat *string     `json:"AlbumArtFormat,omitempty"`
	Encryption     *Encryption `json:"Encryption,omitempty"`
	InputKey       *string     `json:"InputKey,omitempty"`
	MaxHeight      *string     `json:"MaxHeight,omitempty"`
	MaxWidth       *string     `json:"MaxWidth,omitempty"`
	PaddingPolicy  *string     `json:"PaddingPolicy,omitempty"`
	SizingPolicy   *string     `json:"SizingPolicy,omitempty"`
}
