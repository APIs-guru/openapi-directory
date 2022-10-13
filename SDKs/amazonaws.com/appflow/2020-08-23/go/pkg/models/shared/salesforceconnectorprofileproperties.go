package shared

type SalesforceConnectorProfileProperties struct {
	InstanceURL          *string `json:"instanceUrl"`
	IsSandboxEnvironment *bool   `json:"isSandboxEnvironment"`
}
