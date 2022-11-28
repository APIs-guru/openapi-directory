package shared

// UserStackAssociationError
// Describes the error that is returned when a user can’t be associated with or disassociated from a stack.
type UserStackAssociationError struct {
	ErrorCode            *UserStackAssociationErrorCodeEnum `json:"ErrorCode,omitempty"`
	ErrorMessage         *string                            `json:"ErrorMessage,omitempty"`
	UserStackAssociation *UserStackAssociation              `json:"UserStackAssociation,omitempty"`
}
