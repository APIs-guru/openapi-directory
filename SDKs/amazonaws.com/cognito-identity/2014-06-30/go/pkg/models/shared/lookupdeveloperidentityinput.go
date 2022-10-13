package shared

type LookupDeveloperIdentityInput struct {
	DeveloperUserIdentifier *string `json:"DeveloperUserIdentifier"`
	IdentityID              *string `json:"IdentityId"`
	IdentityPoolID          string  `json:"IdentityPoolId"`
	MaxResults              *int64  `json:"MaxResults"`
	NextToken               *string `json:"NextToken"`
}
