package shared

type AssociateSoftwareTokenResponse struct {
	SecretCode *string `json:"SecretCode"`
	Session    *string `json:"Session"`
}
