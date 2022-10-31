package shared

type Code struct {
	Destination CodeDestination `json:"destination"`
	Source      CodeSource      `json:"source"`
}
