package shared

type CreateTagsRequest struct {
	ConfigurationIds []string `json:"configurationIds"`
	Tags             []Tag    `json:"tags"`
}
