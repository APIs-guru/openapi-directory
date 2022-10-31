package shared



type ConnectorProfileCredentials struct {
    Amplitude *AmplitudeConnectorProfileCredentials `json:"Amplitude,omitempty"`
    Datadog *DatadogConnectorProfileCredentials `json:"Datadog,omitempty"`
    Dynatrace *DynatraceConnectorProfileCredentials `json:"Dynatrace,omitempty"`
    GoogleAnalytics *GoogleAnalyticsConnectorProfileCredentials `json:"GoogleAnalytics,omitempty"`
    Honeycode *HoneycodeConnectorProfileCredentials `json:"Honeycode,omitempty"`
    InforNexus *InforNexusConnectorProfileCredentials `json:"InforNexus,omitempty"`
    Marketo *MarketoConnectorProfileCredentials `json:"Marketo,omitempty"`
    Redshift *RedshiftConnectorProfileCredentials `json:"Redshift,omitempty"`
    SapoData *SapoDataConnectorProfileCredentials `json:"SAPOData,omitempty"`
    Salesforce *SalesforceConnectorProfileCredentials `json:"Salesforce,omitempty"`
    ServiceNow *ServiceNowConnectorProfileCredentials `json:"ServiceNow,omitempty"`
    Singular *SingularConnectorProfileCredentials `json:"Singular,omitempty"`
    Slack *SlackConnectorProfileCredentials `json:"Slack,omitempty"`
    Snowflake *SnowflakeConnectorProfileCredentials `json:"Snowflake,omitempty"`
    Trendmicro *TrendmicroConnectorProfileCredentials `json:"Trendmicro,omitempty"`
    Veeva *VeevaConnectorProfileCredentials `json:"Veeva,omitempty"`
    Zendesk *ZendeskConnectorProfileCredentials `json:"Zendesk,omitempty"`
    
}

