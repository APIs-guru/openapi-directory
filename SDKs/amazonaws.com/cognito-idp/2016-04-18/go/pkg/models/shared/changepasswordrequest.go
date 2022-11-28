package shared

// ChangePasswordRequest
// Represents the request to change a user password.
type ChangePasswordRequest struct {
	AccessToken      string `json:"AccessToken"`
	PreviousPassword string `json:"PreviousPassword"`
	ProposedPassword string `json:"ProposedPassword"`
}
