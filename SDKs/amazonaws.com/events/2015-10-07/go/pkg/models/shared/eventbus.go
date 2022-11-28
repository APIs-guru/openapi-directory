package shared

// EventBus
// An event bus receives events from a source and routes them to rules associated with that event bus. Your account's default event bus receives events from Amazon Web Services services. A custom event bus can receive events from your custom applications and services. A partner event bus receives events from an event source created by an SaaS partner. These events come from the partners services or applications.
type EventBus struct {
	Arn    *string `json:"Arn,omitempty"`
	Name   *string `json:"Name,omitempty"`
	Policy *string `json:"Policy,omitempty"`
}
