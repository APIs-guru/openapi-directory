package shared

// SalesforceAction
// Describes an action to write a message to a Salesforce IoT Cloud Input Stream.
type SalesforceAction struct {
	Token string `json:"token"`
	URL   string `json:"url"`
}
