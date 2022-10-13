package shared

type Device struct {
	CertificateArn string `json:"CertificateArn"`
	ID             string `json:"Id"`
	SyncShadow     *bool  `json:"SyncShadow"`
	ThingArn       string `json:"ThingArn"`
}
