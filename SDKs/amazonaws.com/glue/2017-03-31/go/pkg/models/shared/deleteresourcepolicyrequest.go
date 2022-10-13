package shared

type DeleteResourcePolicyRequest struct {
	PolicyHashCondition *string `json:"PolicyHashCondition"`
	ResourceArn         *string `json:"ResourceArn"`
}
