package shared

type ClientCertificates struct {
	Items    []ClientCertificate `json:"items,omitempty"`
	Position *string             `json:"position,omitempty"`
}
