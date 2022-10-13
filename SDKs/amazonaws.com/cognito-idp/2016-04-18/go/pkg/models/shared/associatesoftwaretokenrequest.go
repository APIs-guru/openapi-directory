package shared

type AssociateSoftwareTokenRequest struct {
	AccessToken *string `json:"AccessToken"`
	Session     *string `json:"Session"`
}
