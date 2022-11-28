package shared

// PolicyDetail
// <p>Contains information about an IAM policy, including the policy document.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
type PolicyDetail struct {
	PolicyDocument *string
	PolicyName     *string
}
