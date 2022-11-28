package shared

// PolicyAttachment
// Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is attached. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#policies">Policies</a>.
type PolicyAttachment struct {
	ObjectIdentifier *string `json:"ObjectIdentifier,omitempty"`
	PolicyID         *string `json:"PolicyId,omitempty"`
	PolicyType       *string `json:"PolicyType,omitempty"`
}
