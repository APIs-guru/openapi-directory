package shared

type JobOutput struct {
	AlbumArt                    *JobAlbumArt   `json:"AlbumArt"`
	AppliedColorSpaceConversion *string        `json:"AppliedColorSpaceConversion"`
	Captions                    *Captions      `json:"Captions"`
	Composition                 []Clip         `json:"Composition"`
	Duration                    *int64         `json:"Duration"`
	DurationMillis              *int64         `json:"DurationMillis"`
	Encryption                  *Encryption    `json:"Encryption"`
	FileSize                    *int64         `json:"FileSize"`
	FrameRate                   *string        `json:"FrameRate"`
	Height                      *int64         `json:"Height"`
	ID                          *string        `json:"Id"`
	Key                         *string        `json:"Key"`
	PresetID                    *string        `json:"PresetId"`
	Rotate                      *string        `json:"Rotate"`
	SegmentDuration             *string        `json:"SegmentDuration"`
	Status                      *string        `json:"Status"`
	StatusDetail                *string        `json:"StatusDetail"`
	ThumbnailEncryption         *Encryption    `json:"ThumbnailEncryption"`
	ThumbnailPattern            *string        `json:"ThumbnailPattern"`
	Watermarks                  []JobWatermark `json:"Watermarks"`
	Width                       *int64         `json:"Width"`
}
