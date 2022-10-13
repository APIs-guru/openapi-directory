package shared

type PutWebhookInput struct {
	Tags    []Tag             `json:"tags"`
	Webhook WebhookDefinition `json:"webhook"`
}
