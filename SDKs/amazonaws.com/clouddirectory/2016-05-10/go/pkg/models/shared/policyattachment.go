package shared

type PolicyAttachment struct {
	ObjectIdentifier *string `json:"ObjectIdentifier"`
	PolicyID         *string `json:"PolicyId"`
	PolicyType       *string `json:"PolicyType"`
}
