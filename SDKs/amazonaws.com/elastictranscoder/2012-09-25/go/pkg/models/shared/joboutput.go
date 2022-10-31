package shared

type JobOutput struct {
	AlbumArt                    *JobAlbumArt   `json:"AlbumArt,omitempty"`
	AppliedColorSpaceConversion *string        `json:"AppliedColorSpaceConversion,omitempty"`
	Captions                    *Captions      `json:"Captions,omitempty"`
	Composition                 []Clip         `json:"Composition,omitempty"`
	Duration                    *int64         `json:"Duration,omitempty"`
	DurationMillis              *int64         `json:"DurationMillis,omitempty"`
	Encryption                  *Encryption    `json:"Encryption,omitempty"`
	FileSize                    *int64         `json:"FileSize,omitempty"`
	FrameRate                   *string        `json:"FrameRate,omitempty"`
	Height                      *int64         `json:"Height,omitempty"`
	ID                          *string        `json:"Id,omitempty"`
	Key                         *string        `json:"Key,omitempty"`
	PresetID                    *string        `json:"PresetId,omitempty"`
	Rotate                      *string        `json:"Rotate,omitempty"`
	SegmentDuration             *string        `json:"SegmentDuration,omitempty"`
	Status                      *string        `json:"Status,omitempty"`
	StatusDetail                *string        `json:"StatusDetail,omitempty"`
	ThumbnailEncryption         *Encryption    `json:"ThumbnailEncryption,omitempty"`
	ThumbnailPattern            *string        `json:"ThumbnailPattern,omitempty"`
	Watermarks                  []JobWatermark `json:"Watermarks,omitempty"`
	Width                       *int64         `json:"Width,omitempty"`
}
