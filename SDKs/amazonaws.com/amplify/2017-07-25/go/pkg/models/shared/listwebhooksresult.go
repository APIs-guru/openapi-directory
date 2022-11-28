package shared

// ListWebhooksResult
//
//	The result structure for the list webhooks request.
type ListWebhooksResult struct {
	NextToken *string   `json:"nextToken,omitempty"`
	Webhooks  []Webhook `json:"webhooks"`
}
