package shared

type ListCertificatesResponse struct {
	Certificates []Certificate `json:"certificates"`
	NextMarker   *string       `json:"nextMarker"`
}
