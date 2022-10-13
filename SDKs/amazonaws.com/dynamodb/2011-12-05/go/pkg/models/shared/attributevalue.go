package shared

type AttributeValue struct {
	B  *string  `json:"B"`
	Bs []string `json:"BS"`
	N  *string  `json:"N"`
	Ns []string `json:"NS"`
	S  *string  `json:"S"`
	Ss []string `json:"SS"`
}
