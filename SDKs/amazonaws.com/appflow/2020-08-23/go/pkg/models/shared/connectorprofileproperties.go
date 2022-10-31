package shared



type ConnectorProfileProperties struct {
    Amplitude map[string]interface{} `json:"Amplitude,omitempty"`
    Datadog *DatadogConnectorProfileProperties `json:"Datadog,omitempty"`
    Dynatrace *DynatraceConnectorProfileProperties `json:"Dynatrace,omitempty"`
    GoogleAnalytics map[string]interface{} `json:"GoogleAnalytics,omitempty"`
    Honeycode map[string]interface{} `json:"Honeycode,omitempty"`
    InforNexus *InforNexusConnectorProfileProperties `json:"InforNexus,omitempty"`
    Marketo *MarketoConnectorProfileProperties `json:"Marketo,omitempty"`
    Redshift *RedshiftConnectorProfileProperties `json:"Redshift,omitempty"`
    SapoData *SapoDataConnectorProfileProperties `json:"SAPOData,omitempty"`
    Salesforce *SalesforceConnectorProfileProperties `json:"Salesforce,omitempty"`
    ServiceNow *ServiceNowConnectorProfileProperties `json:"ServiceNow,omitempty"`
    Singular map[string]interface{} `json:"Singular,omitempty"`
    Slack *SlackConnectorProfileProperties `json:"Slack,omitempty"`
    Snowflake *SnowflakeConnectorProfileProperties `json:"Snowflake,omitempty"`
    Trendmicro map[string]interface{} `json:"Trendmicro,omitempty"`
    Veeva *VeevaConnectorProfileProperties `json:"Veeva,omitempty"`
    Zendesk *ZendeskConnectorProfileProperties `json:"Zendesk,omitempty"`
    
}

