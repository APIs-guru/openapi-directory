package shared

type ProvisioningHook struct {
	PayloadVersion *string `json:"payloadVersion,omitempty"`
	TargetArn      string  `json:"targetArn"`
}
