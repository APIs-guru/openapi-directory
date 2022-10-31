package shared



type Certificates struct {
    AwsHardwareCertificate *string `json:"AwsHardwareCertificate,omitempty"`
    ClusterCertificate *string `json:"ClusterCertificate,omitempty"`
    ClusterCsr *string `json:"ClusterCsr,omitempty"`
    HsmCertificate *string `json:"HsmCertificate,omitempty"`
    ManufacturerHardwareCertificate *string `json:"ManufacturerHardwareCertificate,omitempty"`
    
}

