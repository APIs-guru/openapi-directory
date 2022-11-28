package shared

// SetVisibleToAllUsersInput
// The input to the SetVisibleToAllUsers action.
type SetVisibleToAllUsersInput struct {
	JobFlowIds        []string `json:"JobFlowIds"`
	VisibleToAllUsers bool     `json:"VisibleToAllUsers"`
}
