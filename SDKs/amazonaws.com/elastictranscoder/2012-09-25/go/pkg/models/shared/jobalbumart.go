package shared

type JobAlbumArt struct {
	Artwork     []Artwork `json:"Artwork,omitempty"`
	MergePolicy *string   `json:"MergePolicy,omitempty"`
}
