package shared

// ListOutgoingCertificatesResponse
// The output from the ListOutgoingCertificates operation.
type ListOutgoingCertificatesResponse struct {
	NextMarker           *string               `json:"nextMarker,omitempty"`
	OutgoingCertificates []OutgoingCertificate `json:"outgoingCertificates,omitempty"`
}
