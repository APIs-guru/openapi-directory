package shared

type SourceConnectorProperties struct {
	Marketo    *MarketoSourceProperties    `json:"Marketo,omitempty"`
	S3         *S3SourceProperties         `json:"S3,omitempty"`
	Salesforce *SalesforceSourceProperties `json:"Salesforce,omitempty"`
	ServiceNow *ServiceNowSourceProperties `json:"ServiceNow,omitempty"`
	Zendesk    *ZendeskSourceProperties    `json:"Zendesk,omitempty"`
}
