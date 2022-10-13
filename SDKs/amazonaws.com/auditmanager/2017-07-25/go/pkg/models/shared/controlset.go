package shared

type ControlSet struct {
	Controls []Control `json:"controls"`
	ID       *string   `json:"id"`
	Name     *string   `json:"name"`
}
