package shared

// Filter
// <p>A filter that can use conditional operators.</p> <p>For more information about filters, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html">Querying Discovered Configuration Items</a> in the <i>AWS Application Discovery Service User Guide</i>. </p>
type Filter struct {
	Condition string   `json:"condition"`
	Name      string   `json:"name"`
	Values    []string `json:"values"`
}
