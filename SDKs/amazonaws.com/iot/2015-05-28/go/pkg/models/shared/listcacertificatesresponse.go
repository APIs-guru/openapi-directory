package shared

type ListCaCertificatesResponse struct {
	Certificates []CaCertificate `json:"certificates"`
	NextMarker   *string         `json:"nextMarker"`
}
