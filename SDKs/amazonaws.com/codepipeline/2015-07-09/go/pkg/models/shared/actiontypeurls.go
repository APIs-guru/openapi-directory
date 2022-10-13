package shared

type ActionTypeUrls struct {
	ConfigurationURL     *string `json:"configurationUrl"`
	EntityURLTemplate    *string `json:"entityUrlTemplate"`
	ExecutionURLTemplate *string `json:"executionUrlTemplate"`
	RevisionURLTemplate  *string `json:"revisionUrlTemplate"`
}
