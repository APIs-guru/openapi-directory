package shared

type ConnectorOperator struct {
	Marketo    *MarketoConnectorOperatorEnum    `json:"Marketo,omitempty"`
	S3         *S3ConnectorOperatorEnum         `json:"S3,omitempty"`
	Salesforce *SalesforceConnectorOperatorEnum `json:"Salesforce,omitempty"`
	ServiceNow *ServiceNowConnectorOperatorEnum `json:"ServiceNow,omitempty"`
	Zendesk    *ZendeskConnectorOperatorEnum    `json:"Zendesk,omitempty"`
}
