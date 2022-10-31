package shared



type DescribeCertificatesResponse struct {
    Certificates []Certificate `json:"Certificates,omitempty"`
    Marker *string `json:"Marker,omitempty"`
    
}

