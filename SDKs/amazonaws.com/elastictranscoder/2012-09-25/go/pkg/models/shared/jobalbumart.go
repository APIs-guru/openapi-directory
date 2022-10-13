package shared

type JobAlbumArt struct {
	Artwork     []Artwork `json:"Artwork"`
	MergePolicy *string   `json:"MergePolicy"`
}
