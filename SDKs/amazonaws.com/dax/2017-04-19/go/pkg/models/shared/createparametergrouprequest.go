package shared

type CreateParameterGroupRequest struct {
	Description        *string `json:"Description"`
	ParameterGroupName string  `json:"ParameterGroupName"`
}
