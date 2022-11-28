package shared

// PartnerEventSource
// A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that Amazon Web Services account can receive events from the partner's applications or services.
type PartnerEventSource struct {
	Arn  *string `json:"Arn,omitempty"`
	Name *string `json:"Name,omitempty"`
}
