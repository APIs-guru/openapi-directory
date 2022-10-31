package shared



type PutWebhookInput struct {
    Tags []Tag `json:"tags,omitempty"`
    Webhook WebhookDefinition `json:"webhook"`
    
}

