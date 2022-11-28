package shared

// Thumbnails
// Thumbnails for videos.
type Thumbnails struct {
	AspectRatio   *string `json:"AspectRatio,omitempty"`
	Format        *string `json:"Format,omitempty"`
	Interval      *string `json:"Interval,omitempty"`
	MaxHeight     *string `json:"MaxHeight,omitempty"`
	MaxWidth      *string `json:"MaxWidth,omitempty"`
	PaddingPolicy *string `json:"PaddingPolicy,omitempty"`
	Resolution    *string `json:"Resolution,omitempty"`
	SizingPolicy  *string `json:"SizingPolicy,omitempty"`
}
