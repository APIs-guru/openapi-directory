package shared

// GetDataRetrievalPolicyOutput
// Contains the Amazon S3 Glacier response to the <code>GetDataRetrievalPolicy</code> request.
type GetDataRetrievalPolicyOutput struct {
	Policy *DataRetrievalPolicy `json:"Policy,omitempty"`
}
