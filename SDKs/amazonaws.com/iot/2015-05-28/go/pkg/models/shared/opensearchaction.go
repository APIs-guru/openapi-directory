package shared

// OpenSearchAction
// Describes an action that writes data to an Amazon OpenSearch Service domain.
type OpenSearchAction struct {
	Endpoint string `json:"endpoint"`
	ID       string `json:"id"`
	Index    string `json:"index"`
	RoleArn  string `json:"roleArn"`
	Type     string `json:"type"`
}
