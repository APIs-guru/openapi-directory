package shared

// ElasticsearchSettings
// Provides information that defines an Elasticsearch endpoint.
type ElasticsearchSettings struct {
	EndpointURI             string `json:"EndpointUri"`
	ErrorRetryDuration      *int64 `json:"ErrorRetryDuration,omitempty"`
	FullLoadErrorPercentage *int64 `json:"FullLoadErrorPercentage,omitempty"`
	ServiceAccessRoleArn    string `json:"ServiceAccessRoleArn"`
}
