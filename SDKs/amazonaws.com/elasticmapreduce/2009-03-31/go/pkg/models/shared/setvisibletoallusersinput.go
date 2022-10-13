package shared

type SetVisibleToAllUsersInput struct {
	JobFlowIds        []string `json:"JobFlowIds"`
	VisibleToAllUsers bool     `json:"VisibleToAllUsers"`
}
