package shared

// AuthorizationCodesSharedModelsCategory
// A category for Authorization Code Definitions
type AuthorizationCodesSharedModelsCategory struct {
	Description *string `json:"Description,omitempty" form:"name=Description"`
	ID          *string `json:"ID,omitempty" form:"name=ID"`
	Name        *string `json:"Name,omitempty" form:"name=Name"`
}
