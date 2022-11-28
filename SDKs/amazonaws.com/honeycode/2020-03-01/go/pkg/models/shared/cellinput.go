package shared

// CellInput
//
//	CellInput object contains the data needed to create or update cells in a table.
type CellInput struct {
	Fact *string `json:"fact,omitempty"`
}
