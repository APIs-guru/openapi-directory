package shared

// DomainNames
// <p>Represents a collection of <a>DomainName</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Client-Side Certificate</a> </div>
type DomainNames struct {
	Items    []DomainName `json:"items,omitempty"`
	Position *string      `json:"position,omitempty"`
}
