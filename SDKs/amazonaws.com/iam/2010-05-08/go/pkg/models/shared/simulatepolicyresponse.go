package shared

// SimulatePolicyResponse
// Contains the response to a successful <a>SimulatePrincipalPolicy</a> or <a>SimulateCustomPolicy</a> request.
type SimulatePolicyResponse struct {
	EvaluationResults []EvaluationResult
	IsTruncated       *bool
	Marker            *string
}
