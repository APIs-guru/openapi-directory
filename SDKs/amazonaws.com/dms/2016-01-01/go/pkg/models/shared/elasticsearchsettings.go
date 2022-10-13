package shared

type ElasticsearchSettings struct {
	EndpointURI             string `json:"EndpointUri"`
	ErrorRetryDuration      *int64 `json:"ErrorRetryDuration"`
	FullLoadErrorPercentage *int64 `json:"FullLoadErrorPercentage"`
	ServiceAccessRoleArn    string `json:"ServiceAccessRoleArn"`
}
