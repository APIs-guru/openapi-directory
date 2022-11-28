package shared

// ElasticsearchAction
// <p>Describes an action that writes data to an Amazon Elasticsearch Service domain.</p> <note> <p>This action is deprecated. Use the <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_OpenSearchAction.html">OpenSearch action</a> instead.</p> </note>
type ElasticsearchAction struct {
	Endpoint string `json:"endpoint"`
	ID       string `json:"id"`
	Index    string `json:"index"`
	RoleArn  string `json:"roleArn"`
	Type     string `json:"type"`
}
