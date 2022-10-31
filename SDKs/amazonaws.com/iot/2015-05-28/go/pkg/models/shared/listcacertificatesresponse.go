package shared

type ListCaCertificatesResponse struct {
	Certificates []CaCertificate `json:"certificates,omitempty"`
	NextMarker   *string         `json:"nextMarker,omitempty"`
}
