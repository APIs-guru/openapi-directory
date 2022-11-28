package shared

import (
	"time"
)

// ClientCertificate
// <p>Represents a client certificate used to configure client-side SSL authentication while sending requests to the integration endpoint.</p> <div class="remarks">Client certificates are used to authenticate an API by the backend server. To authenticate an API client (or user), use IAM roles and policies, a custom <a>Authorizer</a> or an Amazon Cognito user pool.</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">Use Client-Side Certificate</a> </div>
type ClientCertificate struct {
	ClientCertificateID   *string           `json:"clientCertificateId,omitempty"`
	CreatedDate           *time.Time        `json:"createdDate,omitempty"`
	Description           *string           `json:"description,omitempty"`
	ExpirationDate        *time.Time        `json:"expirationDate,omitempty"`
	PemEncodedCertificate *string           `json:"pemEncodedCertificate,omitempty"`
	Tags                  map[string]string `json:"tags,omitempty"`
}
