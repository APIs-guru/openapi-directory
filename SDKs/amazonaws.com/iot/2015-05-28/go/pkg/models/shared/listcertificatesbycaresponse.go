package shared

// ListCertificatesByCaResponse
// The output of the ListCertificatesByCA operation.
type ListCertificatesByCaResponse struct {
	Certificates []Certificate `json:"certificates,omitempty"`
	NextMarker   *string       `json:"nextMarker,omitempty"`
}
