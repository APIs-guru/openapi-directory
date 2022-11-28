package shared

// DocumentationParts
// <p>The collection of documentation parts of an API.</p> <div class="remarks"/> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a> </div>
type DocumentationParts struct {
	Items    []DocumentationPart `json:"items,omitempty"`
	Position *string             `json:"position,omitempty"`
}
