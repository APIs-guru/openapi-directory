package shared

type PrefixConfig struct {
	PrefixFormat *PrefixFormatEnum `json:"prefixFormat"`
	PrefixType   *PrefixTypeEnum   `json:"prefixType"`
}
