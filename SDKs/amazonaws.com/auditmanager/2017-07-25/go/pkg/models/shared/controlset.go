package shared

// ControlSet
//
//	A set of controls in Audit Manager.
type ControlSet struct {
	Controls []Control `json:"controls,omitempty"`
	ID       *string   `json:"id,omitempty"`
	Name     *string   `json:"name,omitempty"`
}
