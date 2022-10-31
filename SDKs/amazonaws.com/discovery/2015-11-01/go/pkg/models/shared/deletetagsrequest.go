package shared

type DeleteTagsRequest struct {
	ConfigurationIds []string `json:"configurationIds"`
	Tags             []Tag    `json:"tags,omitempty"`
}
