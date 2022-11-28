package shared

// ActionTypeUrls
// Returns information about URLs for web pages that display to customers as links on the pipeline view, such as an external configuration page for the action type.
type ActionTypeUrls struct {
	ConfigurationURL     *string `json:"configurationUrl,omitempty"`
	EntityURLTemplate    *string `json:"entityUrlTemplate,omitempty"`
	ExecutionURLTemplate *string `json:"executionUrlTemplate,omitempty"`
	RevisionURLTemplate  *string `json:"revisionUrlTemplate,omitempty"`
}
