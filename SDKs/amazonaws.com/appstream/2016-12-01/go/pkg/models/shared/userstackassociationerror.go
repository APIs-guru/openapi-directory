package shared

type UserStackAssociationError struct {
	ErrorCode            *UserStackAssociationErrorCodeEnum `json:"ErrorCode"`
	ErrorMessage         *string                            `json:"ErrorMessage"`
	UserStackAssociation *UserStackAssociation              `json:"UserStackAssociation"`
}
