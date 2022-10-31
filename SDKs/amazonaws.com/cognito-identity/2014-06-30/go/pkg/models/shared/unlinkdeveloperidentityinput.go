package shared

type UnlinkDeveloperIdentityInput struct {
	DeveloperProviderName   string `json:"DeveloperProviderName"`
	DeveloperUserIdentifier string `json:"DeveloperUserIdentifier"`
	IdentityID              string `json:"IdentityId"`
	IdentityPoolID          string `json:"IdentityPoolId"`
}
