package shared

// ClientCertificates
// <p>Represents a collection of <a>ClientCertificate</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">Use Client-Side Certificate</a> </div>
type ClientCertificates struct {
	Items    []ClientCertificate `json:"items,omitempty"`
	Position *string             `json:"position,omitempty"`
}
