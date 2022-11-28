package shared

// PrefixConfig
//
//	Determines the prefix that Amazon AppFlow applies to the destination folder name. You can name your destination folders according to the flow frequency and date.
type PrefixConfig struct {
	PrefixFormat *PrefixFormatEnum `json:"prefixFormat,omitempty"`
	PrefixType   *PrefixTypeEnum   `json:"prefixType,omitempty"`
}
