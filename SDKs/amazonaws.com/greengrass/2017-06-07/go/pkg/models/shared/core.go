package shared

type Core struct {
	CertificateArn string `json:"CertificateArn"`
	ID             string `json:"Id"`
	SyncShadow     *bool  `json:"SyncShadow,omitempty"`
	ThingArn       string `json:"ThingArn"`
}
