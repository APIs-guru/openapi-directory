package shared

// ConnectorOperator
// The operation to be performed on the provided source fields.
type ConnectorOperator struct {
	Marketo    *MarketoConnectorOperatorEnum    `json:"Marketo,omitempty"`
	S3         *S3ConnectorOperatorEnum         `json:"S3,omitempty"`
	Salesforce *SalesforceConnectorOperatorEnum `json:"Salesforce,omitempty"`
	ServiceNow *ServiceNowConnectorOperatorEnum `json:"ServiceNow,omitempty"`
	Zendesk    *ZendeskConnectorOperatorEnum    `json:"Zendesk,omitempty"`
}
