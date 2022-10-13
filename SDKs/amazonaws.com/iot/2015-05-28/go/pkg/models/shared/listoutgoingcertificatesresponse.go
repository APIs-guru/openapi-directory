package shared

type ListOutgoingCertificatesResponse struct {
	NextMarker           *string               `json:"nextMarker"`
	OutgoingCertificates []OutgoingCertificate `json:"outgoingCertificates"`
}
