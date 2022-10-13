package shared

type BatchAssociateUserStackResult struct {
	Errors []UserStackAssociationError `json:"errors"`
}
