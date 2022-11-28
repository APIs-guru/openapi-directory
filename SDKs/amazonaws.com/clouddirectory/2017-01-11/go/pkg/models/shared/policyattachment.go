package shared

// PolicyAttachment
// Contains the <code>PolicyType</code>, <code>PolicyId</code>, and the <code>ObjectIdentifier</code> to which it is attached. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.
type PolicyAttachment struct {
	ObjectIdentifier *string `json:"ObjectIdentifier,omitempty"`
	PolicyID         *string `json:"PolicyId,omitempty"`
	PolicyType       *string `json:"PolicyType,omitempty"`
}
