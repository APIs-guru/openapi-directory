package shared

type SourceConnectorProperties struct {
	Marketo    *MarketoSourceProperties    `json:"Marketo"`
	S3         *S3SourceProperties         `json:"S3"`
	Salesforce *SalesforceSourceProperties `json:"Salesforce"`
	ServiceNow *ServiceNowSourceProperties `json:"ServiceNow"`
	Zendesk    *ZendeskSourceProperties    `json:"Zendesk"`
}
