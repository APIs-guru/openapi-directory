package shared

type ListIdentitiesInput struct {
	HideDisabled   *bool   `json:"HideDisabled"`
	IdentityPoolID string  `json:"IdentityPoolId"`
	MaxResults     int64   `json:"MaxResults"`
	NextToken      *string `json:"NextToken"`
}
