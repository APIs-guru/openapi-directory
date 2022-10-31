package shared

type DisassociateMacSecKeyResponse struct {
	ConnectionID *string     `json:"connectionId,omitempty"`
	MacSecKeys   []MacSecKey `json:"macSecKeys,omitempty"`
}
