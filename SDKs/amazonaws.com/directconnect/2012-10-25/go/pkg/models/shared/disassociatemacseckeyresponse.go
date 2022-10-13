package shared

type DisassociateMacSecKeyResponse struct {
	ConnectionID *string     `json:"connectionId"`
	MacSecKeys   []MacSecKey `json:"macSecKeys"`
}
