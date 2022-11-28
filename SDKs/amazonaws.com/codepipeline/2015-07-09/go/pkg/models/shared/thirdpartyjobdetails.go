package shared

// ThirdPartyJobDetails
// The details of a job sent in response to a <code>GetThirdPartyJobDetails</code> request.
type ThirdPartyJobDetails struct {
	Data  *ThirdPartyJobData `json:"data,omitempty"`
	ID    *string            `json:"id,omitempty"`
	Nonce *string            `json:"nonce,omitempty"`
}
