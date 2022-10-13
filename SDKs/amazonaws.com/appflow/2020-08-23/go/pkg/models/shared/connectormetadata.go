package shared

type ConnectorMetadata struct {
	Amplitude        map[string]interface{}   `json:"Amplitude"`
	CustomerProfiles map[string]interface{}   `json:"CustomerProfiles"`
	Datadog          map[string]interface{}   `json:"Datadog"`
	Dynatrace        map[string]interface{}   `json:"Dynatrace"`
	EventBridge      map[string]interface{}   `json:"EventBridge"`
	GoogleAnalytics  *GoogleAnalyticsMetadata `json:"GoogleAnalytics"`
	Honeycode        *HoneycodeMetadata       `json:"Honeycode"`
	InforNexus       map[string]interface{}   `json:"InforNexus"`
	Marketo          map[string]interface{}   `json:"Marketo"`
	Redshift         map[string]interface{}   `json:"Redshift"`
	S3               map[string]interface{}   `json:"S3"`
	SapoData         map[string]interface{}   `json:"SAPOData"`
	Salesforce       *SalesforceMetadata      `json:"Salesforce"`
	ServiceNow       map[string]interface{}   `json:"ServiceNow"`
	Singular         map[string]interface{}   `json:"Singular"`
	Slack            *SlackMetadata           `json:"Slack"`
	Snowflake        *SnowflakeMetadata       `json:"Snowflake"`
	Trendmicro       map[string]interface{}   `json:"Trendmicro"`
	Upsolver         map[string]interface{}   `json:"Upsolver"`
	Veeva            map[string]interface{}   `json:"Veeva"`
	Zendesk          *ZendeskMetadata         `json:"Zendesk"`
}
