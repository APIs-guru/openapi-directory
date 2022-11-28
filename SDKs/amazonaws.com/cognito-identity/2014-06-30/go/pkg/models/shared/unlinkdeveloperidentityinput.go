package shared

// UnlinkDeveloperIdentityInput
// Input to the <code>UnlinkDeveloperIdentity</code> action.
type UnlinkDeveloperIdentityInput struct {
	DeveloperProviderName   string `json:"DeveloperProviderName"`
	DeveloperUserIdentifier string `json:"DeveloperUserIdentifier"`
	IdentityID              string `json:"IdentityId"`
	IdentityPoolID          string `json:"IdentityPoolId"`
}
