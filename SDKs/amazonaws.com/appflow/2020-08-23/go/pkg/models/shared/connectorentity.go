package shared

// ConnectorEntity
//
//	The high-level entity that can be queried in Amazon AppFlow. For example, a Salesforce entity might be an <i>Account</i> or <i>Opportunity</i>, whereas a ServiceNow entity might be an <i>Incident</i>.
type ConnectorEntity struct {
	HasNestedEntities *bool   `json:"hasNestedEntities,omitempty"`
	Label             *string `json:"label,omitempty"`
	Name              string  `json:"name"`
}
