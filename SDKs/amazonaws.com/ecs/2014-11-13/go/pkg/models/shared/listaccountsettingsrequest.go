package shared

type ListAccountSettingsRequest struct {
	EffectiveSettings *bool            `json:"effectiveSettings"`
	MaxResults        *int64           `json:"maxResults"`
	Name              *SettingNameEnum `json:"name"`
	NextToken         *string          `json:"nextToken"`
	PrincipalArn      *string          `json:"principalArn"`
	Value             *string          `json:"value"`
}
