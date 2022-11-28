package shared

// Qualifier
// Defines a <code>PolicyInformation</code> qualifier. ACM Private CA supports the <a href="https://tools.ietf.org/html/rfc5280#section-4.2.1.4">certification practice statement (CPS) qualifier</a> defined in RFC 5280.
type Qualifier struct {
	CpsURI string `json:"CpsUri"`
}
