package shared

// ParameterGroup
// A named set of parameters that are applied to all of the nodes in a DAX cluster.
type ParameterGroup struct {
	Description        *string `json:"Description,omitempty"`
	ParameterGroupName *string `json:"ParameterGroupName,omitempty"`
}
