package shared

// BasePathMappings
// <p>Represents a collection of <a>BasePathMapping</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Custom Domain Names</a> </div>
type BasePathMappings struct {
	Items    []BasePathMapping `json:"items,omitempty"`
	Position *string           `json:"position,omitempty"`
}
