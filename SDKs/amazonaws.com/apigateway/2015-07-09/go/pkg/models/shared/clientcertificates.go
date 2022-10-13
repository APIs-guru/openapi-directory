package shared

type ClientCertificates struct {
	Items    []ClientCertificate `json:"items"`
	Position *string             `json:"position"`
}
