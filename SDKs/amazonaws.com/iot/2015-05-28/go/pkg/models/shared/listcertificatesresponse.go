package shared

// ListCertificatesResponse
// The output of the ListCertificates operation.
type ListCertificatesResponse struct {
	Certificates []Certificate `json:"certificates,omitempty"`
	NextMarker   *string       `json:"nextMarker,omitempty"`
}
