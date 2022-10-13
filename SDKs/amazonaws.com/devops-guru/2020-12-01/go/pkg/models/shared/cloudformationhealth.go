package shared

type CloudFormationHealth struct {
	Insight   *InsightHealth `json:"Insight"`
	StackName *string        `json:"StackName"`
}
