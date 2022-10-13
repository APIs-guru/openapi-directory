package shared

type DescribeCertificatesResponse struct {
	Certificates []Certificate `json:"Certificates"`
	Marker       *string       `json:"Marker"`
}
