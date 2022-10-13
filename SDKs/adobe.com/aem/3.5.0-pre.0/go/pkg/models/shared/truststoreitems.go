package shared

type TruststoreItems struct {
	Alias        *string `json:"alias"`
	EntryType    *string `json:"entryType"`
	Issuer       *string `json:"issuer"`
	NotAfter     *string `json:"notAfter"`
	NotBefore    *string `json:"notBefore"`
	SerialNumber *int64  `json:"serialNumber"`
	Subject      *string `json:"subject"`
}
