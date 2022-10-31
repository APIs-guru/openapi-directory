package shared



type ConnectorMetadata struct {
    Amplitude map[string]interface{} `json:"Amplitude,omitempty"`
    CustomerProfiles map[string]interface{} `json:"CustomerProfiles,omitempty"`
    Datadog map[string]interface{} `json:"Datadog,omitempty"`
    Dynatrace map[string]interface{} `json:"Dynatrace,omitempty"`
    EventBridge map[string]interface{} `json:"EventBridge,omitempty"`
    GoogleAnalytics *GoogleAnalyticsMetadata `json:"GoogleAnalytics,omitempty"`
    Honeycode *HoneycodeMetadata `json:"Honeycode,omitempty"`
    InforNexus map[string]interface{} `json:"InforNexus,omitempty"`
    Marketo map[string]interface{} `json:"Marketo,omitempty"`
    Redshift map[string]interface{} `json:"Redshift,omitempty"`
    S3 map[string]interface{} `json:"S3,omitempty"`
    SapoData map[string]interface{} `json:"SAPOData,omitempty"`
    Salesforce *SalesforceMetadata `json:"Salesforce,omitempty"`
    ServiceNow map[string]interface{} `json:"ServiceNow,omitempty"`
    Singular map[string]interface{} `json:"Singular,omitempty"`
    Slack *SlackMetadata `json:"Slack,omitempty"`
    Snowflake *SnowflakeMetadata `json:"Snowflake,omitempty"`
    Trendmicro map[string]interface{} `json:"Trendmicro,omitempty"`
    Upsolver map[string]interface{} `json:"Upsolver,omitempty"`
    Veeva map[string]interface{} `json:"Veeva,omitempty"`
    Zendesk *ZendeskMetadata `json:"Zendesk,omitempty"`
    
}

