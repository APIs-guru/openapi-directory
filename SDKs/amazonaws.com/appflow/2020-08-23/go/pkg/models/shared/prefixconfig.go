package shared

type PrefixConfig struct {
	PrefixFormat *PrefixFormatEnum `json:"prefixFormat,omitempty"`
	PrefixType   *PrefixTypeEnum   `json:"prefixType,omitempty"`
}
