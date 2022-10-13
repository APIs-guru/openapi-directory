package shared

type AttributeValue struct {
	B    *string                   `json:"B"`
	Bool *bool                     `json:"BOOL"`
	Bs   []string                  `json:"BS"`
	L    []AttributeValue          `json:"L"`
	M    map[string]AttributeValue `json:"M"`
	N    *string                   `json:"N"`
	Ns   []string                  `json:"NS"`
	Null *bool                     `json:"NULL"`
	S    *string                   `json:"S"`
	Ss   []string                  `json:"SS"`
}
