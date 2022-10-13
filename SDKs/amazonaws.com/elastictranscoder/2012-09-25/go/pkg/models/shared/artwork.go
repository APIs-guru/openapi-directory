package shared

type Artwork struct {
	AlbumArtFormat *string     `json:"AlbumArtFormat"`
	Encryption     *Encryption `json:"Encryption"`
	InputKey       *string     `json:"InputKey"`
	MaxHeight      *string     `json:"MaxHeight"`
	MaxWidth       *string     `json:"MaxWidth"`
	PaddingPolicy  *string     `json:"PaddingPolicy"`
	SizingPolicy   *string     `json:"SizingPolicy"`
}
