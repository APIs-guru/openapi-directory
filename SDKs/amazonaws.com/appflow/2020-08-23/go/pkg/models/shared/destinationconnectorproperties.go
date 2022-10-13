package shared

type DestinationConnectorProperties struct {
	CustomerProfiles *CustomerProfilesDestinationProperties `json:"CustomerProfiles"`
	EventBridge      *EventBridgeDestinationProperties      `json:"EventBridge"`
	Honeycode        *HoneycodeDestinationProperties        `json:"Honeycode"`
	LookoutMetrics   map[string]interface{}                 `json:"LookoutMetrics"`
	Redshift         *RedshiftDestinationProperties         `json:"Redshift"`
	S3               *S3DestinationProperties               `json:"S3"`
	Salesforce       *SalesforceDestinationProperties       `json:"Salesforce"`
	Snowflake        *SnowflakeDestinationProperties        `json:"Snowflake"`
	Upsolver         *UpsolverDestinationProperties         `json:"Upsolver"`
	Zendesk          *ZendeskDestinationProperties          `json:"Zendesk"`
}
