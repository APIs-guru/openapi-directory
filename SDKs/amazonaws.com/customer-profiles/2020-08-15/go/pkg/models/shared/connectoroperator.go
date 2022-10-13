package shared

type ConnectorOperator struct {
	Marketo    *MarketoConnectorOperatorEnum    `json:"Marketo"`
	S3         *S3ConnectorOperatorEnum         `json:"S3"`
	Salesforce *SalesforceConnectorOperatorEnum `json:"Salesforce"`
	ServiceNow *ServiceNowConnectorOperatorEnum `json:"ServiceNow"`
	Zendesk    *ZendeskConnectorOperatorEnum    `json:"Zendesk"`
}
