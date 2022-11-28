package shared

// Resource
//
//	A system asset that is evaluated in an Audit Manager assessment.
type Resource struct {
	Arn   *string `json:"arn,omitempty"`
	Value *string `json:"value,omitempty"`
}
