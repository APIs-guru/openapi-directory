package shared

// CreateJobOutput
// The <code>CreateJobOutput</code> structure.
type CreateJobOutput struct {
	AlbumArt            *JobAlbumArt   `json:"AlbumArt,omitempty"`
	Captions            *Captions      `json:"Captions,omitempty"`
	Composition         []Clip         `json:"Composition,omitempty"`
	Encryption          *Encryption    `json:"Encryption,omitempty"`
	Key                 *string        `json:"Key,omitempty"`
	PresetID            *string        `json:"PresetId,omitempty"`
	Rotate              *string        `json:"Rotate,omitempty"`
	SegmentDuration     *string        `json:"SegmentDuration,omitempty"`
	ThumbnailEncryption *Encryption    `json:"ThumbnailEncryption,omitempty"`
	ThumbnailPattern    *string        `json:"ThumbnailPattern,omitempty"`
	Watermarks          []JobWatermark `json:"Watermarks,omitempty"`
}
