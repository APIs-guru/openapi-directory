package shared



type ListOutgoingCertificatesResponse struct {
    NextMarker *string `json:"nextMarker,omitempty"`
    OutgoingCertificates []OutgoingCertificate `json:"outgoingCertificates,omitempty"`
    
}

