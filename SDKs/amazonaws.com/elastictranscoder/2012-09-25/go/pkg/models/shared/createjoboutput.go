package shared

type CreateJobOutput struct {
	AlbumArt            *JobAlbumArt   `json:"AlbumArt"`
	Captions            *Captions      `json:"Captions"`
	Composition         []Clip         `json:"Composition"`
	Encryption          *Encryption    `json:"Encryption"`
	Key                 *string        `json:"Key"`
	PresetID            *string        `json:"PresetId"`
	Rotate              *string        `json:"Rotate"`
	SegmentDuration     *string        `json:"SegmentDuration"`
	ThumbnailEncryption *Encryption    `json:"ThumbnailEncryption"`
	ThumbnailPattern    *string        `json:"ThumbnailPattern"`
	Watermarks          []JobWatermark `json:"Watermarks"`
}
