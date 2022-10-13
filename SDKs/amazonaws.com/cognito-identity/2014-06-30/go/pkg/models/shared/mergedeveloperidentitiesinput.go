package shared

type MergeDeveloperIdentitiesInput struct {
	DestinationUserIdentifier string `json:"DestinationUserIdentifier"`
	DeveloperProviderName     string `json:"DeveloperProviderName"`
	IdentityPoolID            string `json:"IdentityPoolId"`
	SourceUserIdentifier      string `json:"SourceUserIdentifier"`
}
