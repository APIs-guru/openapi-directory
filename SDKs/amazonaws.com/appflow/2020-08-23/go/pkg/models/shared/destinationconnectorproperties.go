package shared



type DestinationConnectorProperties struct {
    CustomerProfiles *CustomerProfilesDestinationProperties `json:"CustomerProfiles,omitempty"`
    EventBridge *EventBridgeDestinationProperties `json:"EventBridge,omitempty"`
    Honeycode *HoneycodeDestinationProperties `json:"Honeycode,omitempty"`
    LookoutMetrics map[string]interface{} `json:"LookoutMetrics,omitempty"`
    Redshift *RedshiftDestinationProperties `json:"Redshift,omitempty"`
    S3 *S3DestinationProperties `json:"S3,omitempty"`
    Salesforce *SalesforceDestinationProperties `json:"Salesforce,omitempty"`
    Snowflake *SnowflakeDestinationProperties `json:"Snowflake,omitempty"`
    Upsolver *UpsolverDestinationProperties `json:"Upsolver,omitempty"`
    Zendesk *ZendeskDestinationProperties `json:"Zendesk,omitempty"`
    
}

