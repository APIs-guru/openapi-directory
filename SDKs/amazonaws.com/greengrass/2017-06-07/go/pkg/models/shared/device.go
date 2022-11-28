package shared

// Device
// Information about a device.
type Device struct {
	CertificateArn string `json:"CertificateArn"`
	ID             string `json:"Id"`
	SyncShadow     *bool  `json:"SyncShadow,omitempty"`
	ThingArn       string `json:"ThingArn"`
}
