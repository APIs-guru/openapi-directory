package shared

type ChangePasswordRequest struct {
	AccessToken      string `json:"AccessToken"`
	PreviousPassword string `json:"PreviousPassword"`
	ProposedPassword string `json:"ProposedPassword"`
}
