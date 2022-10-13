package shared

type ProvisioningHook struct {
	PayloadVersion *string `json:"payloadVersion"`
	TargetArn      string  `json:"targetArn"`
}
