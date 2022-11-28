package shared

// Failure
// A failed resource. For a list of common causes, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html">API failure reasons</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.
type Failure struct {
	Arn    *string `json:"arn,omitempty"`
	Detail *string `json:"detail,omitempty"`
	Reason *string `json:"reason,omitempty"`
}
