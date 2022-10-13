package shared

type ListWebhooksOutput struct {
	NextToken *string           `json:"NextToken"`
	Webhooks  []ListWebhookItem `json:"webhooks"`
}
