package shared

type ListWebhooksResult struct {
	NextToken *string   `json:"nextToken"`
	Webhooks  []Webhook `json:"webhooks"`
}
