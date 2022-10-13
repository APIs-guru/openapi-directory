package shared

type SourceConnectorProperties struct {
	Amplitude       *AmplitudeSourceProperties       `json:"Amplitude"`
	Datadog         *DatadogSourceProperties         `json:"Datadog"`
	Dynatrace       *DynatraceSourceProperties       `json:"Dynatrace"`
	GoogleAnalytics *GoogleAnalyticsSourceProperties `json:"GoogleAnalytics"`
	InforNexus      *InforNexusSourceProperties      `json:"InforNexus"`
	Marketo         *MarketoSourceProperties         `json:"Marketo"`
	S3              *S3SourceProperties              `json:"S3"`
	SapoData        *SapoDataSourceProperties        `json:"SAPOData"`
	Salesforce      *SalesforceSourceProperties      `json:"Salesforce"`
	ServiceNow      *ServiceNowSourceProperties      `json:"ServiceNow"`
	Singular        *SingularSourceProperties        `json:"Singular"`
	Slack           *SlackSourceProperties           `json:"Slack"`
	Trendmicro      *TrendmicroSourceProperties      `json:"Trendmicro"`
	Veeva           *VeevaSourceProperties           `json:"Veeva"`
	Zendesk         *ZendeskSourceProperties         `json:"Zendesk"`
}
