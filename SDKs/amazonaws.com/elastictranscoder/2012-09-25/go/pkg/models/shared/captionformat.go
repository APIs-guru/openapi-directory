package shared

// CaptionFormat
// The file format of the output captions. If you leave this value blank, Elastic Transcoder returns an error.
type CaptionFormat struct {
	Encryption *Encryption `json:"Encryption,omitempty"`
	Format     *string     `json:"Format,omitempty"`
	Pattern    *string     `json:"Pattern,omitempty"`
}
