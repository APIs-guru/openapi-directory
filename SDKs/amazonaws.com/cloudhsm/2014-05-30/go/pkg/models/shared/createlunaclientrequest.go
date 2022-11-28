package shared

// CreateLunaClientRequest
// Contains the inputs for the <a>CreateLunaClient</a> action.
type CreateLunaClientRequest struct {
	Certificate string  `json:"Certificate"`
	Label       *string `json:"Label,omitempty"`
}
