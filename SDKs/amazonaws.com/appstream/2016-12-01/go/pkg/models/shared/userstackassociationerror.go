package shared

type UserStackAssociationError struct {
	ErrorCode            *UserStackAssociationErrorCodeEnum `json:"ErrorCode,omitempty"`
	ErrorMessage         *string                            `json:"ErrorMessage,omitempty"`
	UserStackAssociation *UserStackAssociation              `json:"UserStackAssociation,omitempty"`
}
