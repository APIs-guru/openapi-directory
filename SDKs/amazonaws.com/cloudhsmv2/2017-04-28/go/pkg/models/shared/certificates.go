package shared

type Certificates struct {
	AwsHardwareCertificate          *string `json:"AwsHardwareCertificate"`
	ClusterCertificate              *string `json:"ClusterCertificate"`
	ClusterCsr                      *string `json:"ClusterCsr"`
	HsmCertificate                  *string `json:"HsmCertificate"`
	ManufacturerHardwareCertificate *string `json:"ManufacturerHardwareCertificate"`
}
