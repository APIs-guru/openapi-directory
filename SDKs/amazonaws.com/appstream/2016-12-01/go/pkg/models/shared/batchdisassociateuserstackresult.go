package shared

type BatchDisassociateUserStackResult struct {
	Errors []UserStackAssociationError `json:"errors,omitempty"`
}
