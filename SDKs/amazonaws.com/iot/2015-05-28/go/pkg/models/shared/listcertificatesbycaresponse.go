package shared

type ListCertificatesByCaResponse struct {
	Certificates []Certificate `json:"certificates,omitempty"`
	NextMarker   *string       `json:"nextMarker,omitempty"`
}
