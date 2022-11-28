package shared

// SalesforceConnectorProfileProperties
//
//	The connector-specific profile properties required when using Salesforce.
type SalesforceConnectorProfileProperties struct {
	InstanceURL          *string `json:"instanceUrl,omitempty"`
	IsSandboxEnvironment *bool   `json:"isSandboxEnvironment,omitempty"`
}
