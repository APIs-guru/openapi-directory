package shared

// AttributeValue
// AttributeValue can be <code>String</code>, <code>Number</code>, <code>Binary</code>, <code>StringSet</code>, <code>NumberSet</code>, <code>BinarySet</code>.
type AttributeValue struct {
	B  *string  `json:"B,omitempty"`
	Bs []string `json:"BS,omitempty"`
	N  *string  `json:"N,omitempty"`
	Ns []string `json:"NS,omitempty"`
	S  *string  `json:"S,omitempty"`
	Ss []string `json:"SS,omitempty"`
}
