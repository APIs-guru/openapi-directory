package shared

type ConnectorProfileProperties struct {
	Amplitude       map[string]interface{}                `json:"Amplitude"`
	Datadog         *DatadogConnectorProfileProperties    `json:"Datadog"`
	Dynatrace       *DynatraceConnectorProfileProperties  `json:"Dynatrace"`
	GoogleAnalytics map[string]interface{}                `json:"GoogleAnalytics"`
	Honeycode       map[string]interface{}                `json:"Honeycode"`
	InforNexus      *InforNexusConnectorProfileProperties `json:"InforNexus"`
	Marketo         *MarketoConnectorProfileProperties    `json:"Marketo"`
	Redshift        *RedshiftConnectorProfileProperties   `json:"Redshift"`
	SapoData        *SapoDataConnectorProfileProperties   `json:"SAPOData"`
	Salesforce      *SalesforceConnectorProfileProperties `json:"Salesforce"`
	ServiceNow      *ServiceNowConnectorProfileProperties `json:"ServiceNow"`
	Singular        map[string]interface{}                `json:"Singular"`
	Slack           *SlackConnectorProfileProperties      `json:"Slack"`
	Snowflake       *SnowflakeConnectorProfileProperties  `json:"Snowflake"`
	Trendmicro      map[string]interface{}                `json:"Trendmicro"`
	Veeva           *VeevaConnectorProfileProperties      `json:"Veeva"`
	Zendesk         *ZendeskConnectorProfileProperties    `json:"Zendesk"`
}
