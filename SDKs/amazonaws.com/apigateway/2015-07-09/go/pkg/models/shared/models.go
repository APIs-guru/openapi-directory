package shared

// Models
// <p>Represents a collection of <a>Model</a> resources.</p> <div class="seeAlso"> <a>Method</a>, <a>MethodResponse</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Models and Mappings</a> </div>
type Models struct {
	Items    []Model `json:"items,omitempty"`
	Position *string `json:"position,omitempty"`
}
