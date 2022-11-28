package shared

// UpdateDeviceCertificateParams
// Parameters to define a mitigation action that changes the state of the device certificate to inactive.
type UpdateDeviceCertificateParams struct {
	Action DeviceCertificateUpdateActionEnum `json:"action"`
}
