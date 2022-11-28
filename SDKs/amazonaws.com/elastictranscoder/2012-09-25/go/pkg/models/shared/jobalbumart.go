package shared

// JobAlbumArt
// The .jpg or .png file associated with an audio file.
type JobAlbumArt struct {
	Artwork     []Artwork `json:"Artwork,omitempty"`
	MergePolicy *string   `json:"MergePolicy,omitempty"`
}
