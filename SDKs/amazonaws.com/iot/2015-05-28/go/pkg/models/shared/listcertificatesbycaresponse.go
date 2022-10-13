package shared

type ListCertificatesByCaResponse struct {
	Certificates []Certificate `json:"certificates"`
	NextMarker   *string       `json:"nextMarker"`
}
