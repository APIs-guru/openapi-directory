package shared

// MergeDeveloperIdentitiesInput
// Input to the <code>MergeDeveloperIdentities</code> action.
type MergeDeveloperIdentitiesInput struct {
	DestinationUserIdentifier string `json:"DestinationUserIdentifier"`
	DeveloperProviderName     string `json:"DeveloperProviderName"`
	IdentityPoolID            string `json:"IdentityPoolId"`
	SourceUserIdentifier      string `json:"SourceUserIdentifier"`
}
