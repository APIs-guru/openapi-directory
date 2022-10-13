package shared

type Thumbnails struct {
	AspectRatio   *string `json:"AspectRatio"`
	Format        *string `json:"Format"`
	Interval      *string `json:"Interval"`
	MaxHeight     *string `json:"MaxHeight"`
	MaxWidth      *string `json:"MaxWidth"`
	PaddingPolicy *string `json:"PaddingPolicy"`
	Resolution    *string `json:"Resolution"`
	SizingPolicy  *string `json:"SizingPolicy"`
}
