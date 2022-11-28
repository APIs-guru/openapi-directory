package shared

// ProvisioningHook
// Structure that contains <code>payloadVersion</code> and <code>targetArn</code>.
type ProvisioningHook struct {
	PayloadVersion *string `json:"payloadVersion,omitempty"`
	TargetArn      string  `json:"targetArn"`
}
