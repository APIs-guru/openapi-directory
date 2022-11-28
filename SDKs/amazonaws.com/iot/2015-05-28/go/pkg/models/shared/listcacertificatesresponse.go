package shared

// ListCaCertificatesResponse
// The output from the ListCACertificates operation.
type ListCaCertificatesResponse struct {
	Certificates []CaCertificate `json:"certificates,omitempty"`
	NextMarker   *string         `json:"nextMarker,omitempty"`
}
