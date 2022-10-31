package shared

type InstanceIdentity struct {
	Document  *string `json:"document,omitempty"`
	Signature *string `json:"signature,omitempty"`
}
