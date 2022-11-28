package shared

// SourceConnectorProperties
// Specifies the information that is required to query a particular Amazon AppFlow connector. Customer Profiles supports Salesforce, Zendesk, Marketo, ServiceNow and Amazon S3.
type SourceConnectorProperties struct {
	Marketo    *MarketoSourceProperties    `json:"Marketo,omitempty"`
	S3         *S3SourceProperties         `json:"S3,omitempty"`
	Salesforce *SalesforceSourceProperties `json:"Salesforce,omitempty"`
	ServiceNow *ServiceNowSourceProperties `json:"ServiceNow,omitempty"`
	Zendesk    *ZendeskSourceProperties    `json:"Zendesk,omitempty"`
}
