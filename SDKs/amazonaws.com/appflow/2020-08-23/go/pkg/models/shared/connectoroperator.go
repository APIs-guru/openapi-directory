package shared

type ConnectorOperator struct {
	Amplitude       *AmplitudeConnectorOperatorEnum       `json:"Amplitude"`
	Datadog         *DatadogConnectorOperatorEnum         `json:"Datadog"`
	Dynatrace       *DynatraceConnectorOperatorEnum       `json:"Dynatrace"`
	GoogleAnalytics *GoogleAnalyticsConnectorOperatorEnum `json:"GoogleAnalytics"`
	InforNexus      *InforNexusConnectorOperatorEnum      `json:"InforNexus"`
	Marketo         *MarketoConnectorOperatorEnum         `json:"Marketo"`
	S3              *S3ConnectorOperatorEnum              `json:"S3"`
	SapoData        *SapoDataConnectorOperatorEnum        `json:"SAPOData"`
	Salesforce      *SalesforceConnectorOperatorEnum      `json:"Salesforce"`
	ServiceNow      *ServiceNowConnectorOperatorEnum      `json:"ServiceNow"`
	Singular        *SingularConnectorOperatorEnum        `json:"Singular"`
	Slack           *SlackConnectorOperatorEnum           `json:"Slack"`
	Trendmicro      *TrendmicroConnectorOperatorEnum      `json:"Trendmicro"`
	Veeva           *VeevaConnectorOperatorEnum           `json:"Veeva"`
	Zendesk         *ZendeskConnectorOperatorEnum         `json:"Zendesk"`
}
