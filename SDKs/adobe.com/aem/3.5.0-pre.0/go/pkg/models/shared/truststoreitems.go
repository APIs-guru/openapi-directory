package shared

type TruststoreItems struct {
	Alias        *string `json:"alias,omitempty"`
	EntryType    *string `json:"entryType,omitempty"`
	Issuer       *string `json:"issuer,omitempty"`
	NotAfter     *string `json:"notAfter,omitempty"`
	NotBefore    *string `json:"notBefore,omitempty"`
	SerialNumber *int64  `json:"serialNumber,omitempty"`
	Subject      *string `json:"subject,omitempty"`
}
