package shared

// APIKeys
// <p>Represents a collection of API keys as represented by an <a>ApiKeys</a> resource.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html">Use API Keys</a> </div>
type APIKeys struct {
	Items    []APIKey `json:"items,omitempty"`
	Position *string  `json:"position,omitempty"`
	Warnings []string `json:"warnings,omitempty"`
}
