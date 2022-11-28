package shared

// Grantee
// Contains information about the grantee.
type Grantee struct {
	DisplayName  *string  `json:"DisplayName,omitempty"`
	EmailAddress *string  `json:"EmailAddress,omitempty"`
	ID           *string  `json:"ID,omitempty"`
	Type         TypeEnum `json:"Type"`
	URI          *string  `json:"URI,omitempty"`
}
