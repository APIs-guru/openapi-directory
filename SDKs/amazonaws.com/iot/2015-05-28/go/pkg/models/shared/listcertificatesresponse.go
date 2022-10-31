package shared



type ListCertificatesResponse struct {
    Certificates []Certificate `json:"certificates,omitempty"`
    NextMarker *string `json:"nextMarker,omitempty"`
    
}

