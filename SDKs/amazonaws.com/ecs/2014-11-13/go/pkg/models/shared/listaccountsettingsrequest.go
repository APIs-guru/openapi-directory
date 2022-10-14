package shared

type ListAccountSettingsRequest struct {
	EffectiveSettings *bool            `json:"effectiveSettings,omitempty"`
	MaxResults        *int64           `json:"maxResults,omitempty"`
	Name              *SettingNameEnum `json:"name,omitempty"`
	NextToken         *string          `json:"nextToken,omitempty"`
	PrincipalArn      *string          `json:"principalArn,omitempty"`
	Value             *string          `json:"value,omitempty"`
}
