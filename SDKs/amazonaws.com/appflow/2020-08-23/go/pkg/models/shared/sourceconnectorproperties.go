package shared

type SourceConnectorProperties struct {
	Amplitude       *AmplitudeSourceProperties       `json:"Amplitude,omitempty"`
	Datadog         *DatadogSourceProperties         `json:"Datadog,omitempty"`
	Dynatrace       *DynatraceSourceProperties       `json:"Dynatrace,omitempty"`
	GoogleAnalytics *GoogleAnalyticsSourceProperties `json:"GoogleAnalytics,omitempty"`
	InforNexus      *InforNexusSourceProperties      `json:"InforNexus,omitempty"`
	Marketo         *MarketoSourceProperties         `json:"Marketo,omitempty"`
	S3              *S3SourceProperties              `json:"S3,omitempty"`
	SapoData        *SapoDataSourceProperties        `json:"SAPOData,omitempty"`
	Salesforce      *SalesforceSourceProperties      `json:"Salesforce,omitempty"`
	ServiceNow      *ServiceNowSourceProperties      `json:"ServiceNow,omitempty"`
	Singular        *SingularSourceProperties        `json:"Singular,omitempty"`
	Slack           *SlackSourceProperties           `json:"Slack,omitempty"`
	Trendmicro      *TrendmicroSourceProperties      `json:"Trendmicro,omitempty"`
	Veeva           *VeevaSourceProperties           `json:"Veeva,omitempty"`
	Zendesk         *ZendeskSourceProperties         `json:"Zendesk,omitempty"`
}
