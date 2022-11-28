package shared

// Resources
// <p>Represents a collection of <a>Resource</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
type Resources struct {
	Items    []Resource `json:"items,omitempty"`
	Position *string    `json:"position,omitempty"`
}
