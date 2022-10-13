package shared

type ConnectorProfileCredentials struct {
	Amplitude       *AmplitudeConnectorProfileCredentials       `json:"Amplitude"`
	Datadog         *DatadogConnectorProfileCredentials         `json:"Datadog"`
	Dynatrace       *DynatraceConnectorProfileCredentials       `json:"Dynatrace"`
	GoogleAnalytics *GoogleAnalyticsConnectorProfileCredentials `json:"GoogleAnalytics"`
	Honeycode       *HoneycodeConnectorProfileCredentials       `json:"Honeycode"`
	InforNexus      *InforNexusConnectorProfileCredentials      `json:"InforNexus"`
	Marketo         *MarketoConnectorProfileCredentials         `json:"Marketo"`
	Redshift        *RedshiftConnectorProfileCredentials        `json:"Redshift"`
	SapoData        *SapoDataConnectorProfileCredentials        `json:"SAPOData"`
	Salesforce      *SalesforceConnectorProfileCredentials      `json:"Salesforce"`
	ServiceNow      *ServiceNowConnectorProfileCredentials      `json:"ServiceNow"`
	Singular        *SingularConnectorProfileCredentials        `json:"Singular"`
	Slack           *SlackConnectorProfileCredentials           `json:"Slack"`
	Snowflake       *SnowflakeConnectorProfileCredentials       `json:"Snowflake"`
	Trendmicro      *TrendmicroConnectorProfileCredentials      `json:"Trendmicro"`
	Veeva           *VeevaConnectorProfileCredentials           `json:"Veeva"`
	Zendesk         *ZendeskConnectorProfileCredentials         `json:"Zendesk"`
}
