package shared

type APIPassthrough struct {
	Extensions *Extensions  `json:"Extensions"`
	Subject    *Asn1Subject `json:"Subject"`
}
