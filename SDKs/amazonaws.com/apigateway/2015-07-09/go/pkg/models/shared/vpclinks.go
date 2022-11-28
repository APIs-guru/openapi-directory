package shared

// VpcLinks
// <p>The collection of VPC links under the caller's account in a region.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-with-private-integration.html">Getting Started with Private Integrations</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-private-integration.html">Set up Private Integrations</a> </div>
type VpcLinks struct {
	Items    []VpcLink `json:"items,omitempty"`
	Position *string   `json:"position,omitempty"`
}
