package shared

type PreviewAgentsRequest struct {
	MaxResults       *int64  `json:"maxResults"`
	NextToken        *string `json:"nextToken"`
	PreviewAgentsArn string  `json:"previewAgentsArn"`
}
