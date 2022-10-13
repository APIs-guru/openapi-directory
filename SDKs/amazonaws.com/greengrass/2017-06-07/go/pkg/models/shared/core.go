package shared

type Core struct {
	CertificateArn string `json:"CertificateArn"`
	ID             string `json:"Id"`
	SyncShadow     *bool  `json:"SyncShadow"`
	ThingArn       string `json:"ThingArn"`
}
