package shared

// ConnectorOperator
//
//	The operation to be performed on the provided source fields.
type ConnectorOperator struct {
	Amplitude       *AmplitudeConnectorOperatorEnum       `json:"Amplitude,omitempty"`
	Datadog         *DatadogConnectorOperatorEnum         `json:"Datadog,omitempty"`
	Dynatrace       *DynatraceConnectorOperatorEnum       `json:"Dynatrace,omitempty"`
	GoogleAnalytics *GoogleAnalyticsConnectorOperatorEnum `json:"GoogleAnalytics,omitempty"`
	InforNexus      *InforNexusConnectorOperatorEnum      `json:"InforNexus,omitempty"`
	Marketo         *MarketoConnectorOperatorEnum         `json:"Marketo,omitempty"`
	S3              *S3ConnectorOperatorEnum              `json:"S3,omitempty"`
	SapoData        *SapoDataConnectorOperatorEnum        `json:"SAPOData,omitempty"`
	Salesforce      *SalesforceConnectorOperatorEnum      `json:"Salesforce,omitempty"`
	ServiceNow      *ServiceNowConnectorOperatorEnum      `json:"ServiceNow,omitempty"`
	Singular        *SingularConnectorOperatorEnum        `json:"Singular,omitempty"`
	Slack           *SlackConnectorOperatorEnum           `json:"Slack,omitempty"`
	Trendmicro      *TrendmicroConnectorOperatorEnum      `json:"Trendmicro,omitempty"`
	Veeva           *VeevaConnectorOperatorEnum           `json:"Veeva,omitempty"`
	Zendesk         *ZendeskConnectorOperatorEnum         `json:"Zendesk,omitempty"`
}
