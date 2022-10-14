package shared

type SalesforceConnectorProfileProperties struct {
	InstanceURL          *string `json:"instanceUrl,omitempty"`
	IsSandboxEnvironment *bool   `json:"isSandboxEnvironment,omitempty"`
}
